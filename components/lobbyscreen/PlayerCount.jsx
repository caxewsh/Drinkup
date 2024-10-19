import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { UsersIcon } from "react-native-heroicons/solid";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

const PlayerCount = ({ players, maxPlayers = 10 }) => {
  const animatedScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedScale.value }],
    };
  });

  useEffect(() => {
    animatedScale.value = withSpring(1.3, {}, () => {
      animatedScale.value = withSpring(1);
    });
  }, [players.length]);

  return (
    <View className="flex-row justify-center items-center mt-4">
      <Animated.Text className="text-white font-semibold mx-2" style={animatedStyle}>
        {players.length} / {maxPlayers}
      </Animated.Text>
      <UsersIcon color="white" size="20" className="px-4" />
    </View>
  );
};

export default PlayerCount;