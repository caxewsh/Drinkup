import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useImage } from "../provider/ImageContext";


export default function Lobbyscreen() {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState([]);
  const [hasCleared, setHasCleared] = useState(false);
  const [hasMinPlayer, setHasMinPlayer] = useState(false);
  const {backgroundImageSource} = useImage();

  

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
        {/* Header */}
        <View className=" pb-10 m-4 justify-center items-center">
          <Text className="text-white text-2xl font-black">LOBBY</Text>
        </View>
        {/* Input playerName */}
        <View className="flex justify-center items-center">
          <TextInput
            value={playerName}
            onChangeText={(text) => setPlayerName(text)}
            onSubmitEditing={handleAddPlayer}
            textAlign="center"
            placeholder="Nom du joueur"
            className=" bg-white font-semibold w-5/6 mx-4 h-10 px-4 py-1 rounded-md"
          />
        </View>
        {/* playerGrid */}
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex-1 justify-center w-78 m-10 mx-4 p-10 rounded-lg"
        >
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal={false}
            data={players}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className=" bg-white justify-center items-center p-4 rounded-lg my-2">
                <Text className=" text-cyan-900 font-semibold">{item.name}</Text>
              </View>
            )}
          />
        </View>
        {/* Button */}
        <View className="flex-1 justify-center items-center ">
          <TouchableOpacity
            disabled={!hasMinPlayer}
            onPress={startGame}
            className=" bg-white absolute top-0 w-40 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
          >
            <Text className="text-cyan-900 text-sm text-center font-bold">
              ON EST PRET !
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
