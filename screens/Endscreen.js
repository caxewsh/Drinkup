import { View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useImage } from "../provider/ImageContext";
import EndscreenHeader from "../components/endscreen/EndscreenHeader";
import EndscreenButton from "../components/endscreen/EndscreenButton";
import EndscreenCard from "../components/endscreen/EndscreenCard";

export default function Endscreen({ route }) {
  const { backgroundImageSource } = useImage();
  const navigation = useNavigation();
  const { players } = route.params;
  const goToHomescreen = () => {
    navigation.navigate("Home");
  };

  const restartGame = () => {
    navigation.navigate("Lobby");
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
        <EndscreenHeader onPress={goToHomescreen} />
        <EndscreenCard players={players} />
        <EndscreenButton onPress={restartGame} />
      </SafeAreaView>
    </View>
  );
}
