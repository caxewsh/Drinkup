import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowPathIcon } from "react-native-heroicons/solid";

const EndscreenButton = ({ onPress }) => {
  return (
    <View className="flex-1 items-center">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white absolute top-0 w-40 px-4 py-4 border-solid rounded-lg mt-4 flex-row items-center justify-center"
      >
        <Text className="text-cyan-900 text-sm font-bold mr-2">
          Recommencer
        </Text>
        <ArrowPathIcon color="#164e63" />
      </TouchableOpacity>
    </View>
  );
};

export default EndscreenButton;