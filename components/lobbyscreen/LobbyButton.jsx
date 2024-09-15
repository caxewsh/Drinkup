import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, { SlideInDown } from "react-native-reanimated";

const LobbyButton = ({ onPress, disabled }) => {
  return (
    <Animated.View className="flex-1 justify-center items-center " entering={SlideInDown.duration(800)}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        className=" bg-white absolute top-0 w-40 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
      >
        <Text className="text-cyan-900 text-sm text-center font-bold">
          ON EST PRET !
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default LobbyButton;