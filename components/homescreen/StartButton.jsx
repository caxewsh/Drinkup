// StartButton.js
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const StartButton = ({ onPress }) => {
  return (
    <View className="flex justify-center items-center">
      <Animated.View entering={FadeInDown}>
        <TouchableOpacity
          onPress={onPress}
          className="bg-white w-50 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
        >
          <Text className="text-cyan-900 text-sm text-center font-bold">
            LANCER LA PARTIE
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default StartButton;