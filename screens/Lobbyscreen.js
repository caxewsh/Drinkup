import {
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useImage } from "../provider/ImageContext";
import LobbyHeader from "../components/lobbyscreen/LobbyHeader";
import PlayerNameInput from "../components/lobbyscreen/PlayerNameInput";
import PlayerGrid from "../components/lobbyscreen/PlayerGrid";
import LobbyButton from "../components/lobbyscreen/LobbyButton";

export default function Lobbyscreen() {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [hasCleared, setHasCleared] = useState(false);
  const [hasMinPlayer, setHasMinPlayer] = useState(false);
  const { backgroundImageSource } = useImage();

  useEffect(() => {
    loadPlayers();
    if (!hasCleared) {
      // Check if the storage directory exists before clearing
      AsyncStorage.getItem("players")
        .then((storedPlayers) => {
          if (storedPlayers) {
            AsyncStorage.clear().then(() => {
              console.log("--- Async storage cleared in lobby ✅---");
              setHasCleared(true);
            });
          } else {
            console.log("No data in AsyncStorage to clear");
          }
        })
        .catch((error) => {
          console.error("Error loading player from async storage", error);
        });
    }
  }, []);

  useEffect(() => {
    setHasMinPlayer(players.length >= 2);
  }, [players]);

  const loadPlayers = async () => {
    try {
      const storedPlayers = await AsyncStorage.getItem("players");
      if (storedPlayers) {
        setPlayers(JSON.parse(storedPlayers));
      }
    } catch (error) {
      console.error("error loading player from async storage", error);
    }
  };

  const savePlayers = async (newPlayers) => {
    try {
      await AsyncStorage.setItem("players", JSON.stringify(newPlayers));
    } catch (error) {
      console.error("error saving player with async storage", error);
    }
  };
  const handleAddPlayer = () => {
    if (playerName.trim() !== "" && players.length < 10) {
      const newPlayers = [
        ...players,
        { id: players.length + 1, name: playerName },
      ];
      setPlayers(newPlayers);
      console.log("new player set : " + JSON.stringify(newPlayers));
      savePlayers(newPlayers);
      setPlayerName("");
    }
  };

  const navigation = useNavigation();
  const startGame = () => {
    navigation.navigate("Game");
  };
  return (
    <View className="flex-1">
      <ImageBackground
        blurRadius={70}
        source={backgroundImageSource}
        resizeMode="cover"
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex-1">
        <StatusBar style="light" />
        <LobbyHeader />
        <PlayerNameInput
          onChangeText={setPlayerName}
          onSubmitEditing={handleAddPlayer}
          value={playerName}
        />
        <PlayerGrid players={players} />
        <LobbyButton onPress={startGame} disabled={!hasMinPlayer} />
      </SafeAreaView>
    </View>
  );
}
