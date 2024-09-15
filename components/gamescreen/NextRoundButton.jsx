import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NextRoundButton = ({ onPress }) => {
  return (
    <View className="flex  justify-center items-center ">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white w-40 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
      >
        <Text className="text-cyan-900 text-sm text-center font-bold">
          TOUR SUIVANT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextRoundButton;