import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HomeIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const GamescreenHeader = () => {
  const navigation = useNavigation();
  const goToHomescreen = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-row m-4 pb-10">
      <TouchableOpacity
        className="absolute left-8"
        onPress={goToHomescreen}
      >
        <HomeIcon
          color="white"
          size="30"
          className=""
          testID="homeButton"
        />
      </TouchableOpacity>
      <Text className="text-white absolute right-28 text-2xl font-black">
        DRINK'UP
      </Text>
    </View>
  );
};

export default GamescreenHeader;