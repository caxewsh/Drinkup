import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HomeIcon } from "react-native-heroicons/solid";

const EndscreenHeader = ({ onPress }) => {

  return (
    <View className="flex-row m-4 pb-10">
          <TouchableOpacity
            className="absolute left-8"
            onPress={onPress}
          >
            <HomeIcon color="white" size="30" className="" testID="homeButton" />
          </TouchableOpacity>
          <Text className="text-white absolute left-28 text-2xl font-black">
            Fin de Partie 
          </Text>
        </View>
  ) 
};

export default EndscreenHeader;