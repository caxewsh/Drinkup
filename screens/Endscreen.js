import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HomeIcon, ArrowPathIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useImage } from "../provider/ImageContext";

export default function Endscreen() {
  const { backgroundImageSource } = useImage();
  const navigation = useNavigation();
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
        {/* Header */}
        <View className="flex-row m-4 pb-10">
          <TouchableOpacity
            className="absolute left-8"
            onPress={goToHomescreen}
          >
            <HomeIcon color="white" size="30" className="" />
          </TouchableOpacity>
          <Text className="text-white absolute left-28 text-2xl font-black">
            Fin de Partie 
          </Text>
        </View>
        {/* Ranking Table */}
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex-1 justify-center w-78 m-10 mx-4 p-10 rounded-lg"
        >
          <Text className=" text-white font-semibold text-center text-sm">
            Merci d'avoir participé à la beta. Faites nous part de vos retour
            via le lien ci-dessous :
          </Text>
        </View>
        {/* Button */}
        <View className="flex-1 items-center ">
          <TouchableOpacity
            className=" bg-white absolute top-0 w-40 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
            onPress={restartGame}
          >
            <Text className="text-cyan-900 text-sm text-center font-bold">
              Recommencer
              <ArrowPathIcon color="#164e63" className=" "/>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
