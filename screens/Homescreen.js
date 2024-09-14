import { View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useImage } from "../provider/ImageContext";
import Header from "../components/homescreen/Header";
import GifViewer from "../components/homescreen/GifViewer";
import StartButton from "../components/homescreen/StartButton";


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
          <Header />
          <GifViewer />
          <StartButton onPress={goToLobby} />
      </SafeAreaView>
    </View>
  );
}
