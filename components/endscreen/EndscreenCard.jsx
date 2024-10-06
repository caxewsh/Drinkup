import React from "react";
import { View, Text, ScrollView } from "react-native";

// EndscreenCard.jsx
const EndscreenCard = ({ players }) => {
  return (
    <View
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="flex-1 justify-center w-78 m-10 mx-4 p-10 rounded-lg"
    >
      <Text className="text-white font-semibold text-center text-sm mb-4">
        Plus tu prends chères, plus tu accumules les points ! Voici les scores :
      </Text>
      
      <ScrollView className="mt-4">
        {/* Display player scores */}
        {players.map((player, index) => (
          <View key={index} className="flex-row justify-between my-2 p-2 bg-gray-800 rounded-lg">
            <Text className="text-white font-semibold">
              {player.name} {/* Display player name */}
            </Text>
            <Text className="text-white font-semibold">
              Score: {player.score} {/* Display player score */}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default EndscreenCard;
