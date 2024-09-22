import React from "react";
import { View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useImage } from "../provider/ImageContext";
import SettingHeader from "../components/settingscreen/SettingHeader";


export default function SettingScreen() {
  const navigation = useNavigation();
  const { backgroundImageSource } = useImage();

  const goToHomescreen = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <ImageBackground
        blurRadius={70}
        source={backgroundImageSource}
        resizeMode="cover"
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex-1 ">
        <StatusBar style="light" />
        <SettingHeader title="OPTIONS" onPress={goToHomescreen} />
      </SafeAreaView>
    </View>
  );
}