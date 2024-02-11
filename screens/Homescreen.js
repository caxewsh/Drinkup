import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useImage } from "../provider/ImageContext";


export default function HomeScreen() {
  const navigation = useNavigation();
  const {backgroundImageSource} = useImage();

  const goToLobby = () => {
    AsyncStorage.clear();
    navigation.navigate("Lobby");
  };
  /* eslint-disable react/no-unescaped-entities */ 
  return (
    <View className="flex-1">
      <ImageBackground blurRadius={70}
        source={backgroundImageSource}
        resizeMode="cover"
        className="absolute h-full w-full"/>
      <SafeAreaView className="flex-1 ">
        <StatusBar style="light" />
        {/* Header */}
        <View className="pb-4 m-4 justify-center items-center">
          <Text className="text-white text-2xl font-black">DRINK'UP     </Text> 
          <Image className="w-12 h-12 left-20 bottom-10 bg-white rounded-xl " source={require("../assets/Icon-83.5_2x-removebg-preview.png")}/>
        </View>
        {/* GIF */}
        <View className="flex justify-center items-center  p-11 m-11">
          <Image
            style={{ width: 200, height: 200 }}
            src={"https://media.giphy.com/media/EFhW3ZuQoV4gW59sfg/giphy.gif"}
          />
        </View>
        {/* Button */}
        <View className="flex justify-center items-center ">
          <TouchableOpacity
            onPress={goToLobby}
            className=" bg-white w-50 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
          >
            <Text className="text-cyan-900 text-sm text-center font-bold">
              LANCER LA PARTIE
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
