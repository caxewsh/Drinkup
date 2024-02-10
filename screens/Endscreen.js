import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { HomeIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { useImage } from "../provider/ImageContext";


export default function Endscreen() {
    const {backgroundImageSource} = useImage();
    const navigation = useNavigation();
    const goToHomescreen = () => {
      navigation.navigate("Home");
      AsyncStorage.clear();
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
        <StatusBar style="light"/>
        {/* Header */}
        <View className="flex-row m-4 pb-10">
            <TouchableOpacity className="absolute left-8" onPress={goToHomescreen}>
            <HomeIcon color="white" size="30" className=""/>
            </TouchableOpacity>
            <Text className="text-white absolute left-28 text-2xl font-black">Classement</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
