import React from "react";
import { View, Text } from "react-native";
import Animated, { LightSpeedInRight, FadeOut } from "react-native-reanimated";
import { ActivityIndicator } from "react-native";


const GameCard = ({ isLoading, players, questions, currentQuestionIndex }) => {
    return (
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex m-10 p-10 mx-4 rounded-lg items-center"
        >
          {!isLoading && questions.length > 0 && players.length > 0 ? (
            (() => {
              const item = questions[currentQuestionIndex];
              const currentPlayer =
                players[currentQuestionIndex % players.length];
              return (
                <Animated.View className="items-center" key={currentQuestionIndex} entering={LightSpeedInRight.duration(500)} exiting={FadeOut} >
                  <View className="bg-white rounded-2xl px-2">
                    <Text className="text-cyan-700 font-semibold text-center text-xs">
                      Thème : {item.Theme}
                    </Text>
                  </View>
                  <Text className="text-3xl text-center text-white font-black p-4">
                    {currentPlayer.name}
                  </Text>
                  <Text className="text-white font-semibold text-center text-sm">
                    {item.Questions}
                  </Text>
                </Animated.View>
              );
            })()
          ) : (
            <>
              <ActivityIndicator size="large" className="m-4" />
              <Text className="text-white font-semibold text-center text-sm">
                Loading...
              </Text>
            </>
          )}
        </View>
    );
};

export default GameCard;