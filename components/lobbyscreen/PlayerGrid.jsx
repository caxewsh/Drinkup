import React from "react";
import { View, FlatList, Text } from "react-native";
import Animated, { SlideInUp, FadeOutRight } from "react-native-reanimated";
import TrashButton from "./TrashButton";

const PlayerGrid = ({ players, onRemovePlayer }) => {
  return (
    <View
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="flex-1 justify-center w-78 m-10 mx-4 p-10 rounded-lg"
    >
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={false}
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Animated.View className="bg-white flex p-4 rounded-lg my-2" entering={SlideInUp} exiting={FadeOutRight}>
            <View className="flex-row justify-between items-center">
              <Text className="text-cyan-900 font-semibold">{item.name}</Text>
              <TrashButton onPress={() => onRemovePlayer(item.id)} />
            </View>
          </Animated.View>
        )}
      />
    </View>
  );
};

export default PlayerGrid;