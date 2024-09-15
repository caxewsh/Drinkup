import React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

const ProgressBar = ({ currentQuestionIndex, questions }) => {
  return (
    <View
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      className="flex justify-center items-center m-4 p-4 rounded-lg"
    >
      <Text className=" text-white font-black text-lg mb-10">
        On en est où ?
      </Text>
      <Progress.Bar
        progress={(currentQuestionIndex + 1) / questions.length}
        width={300}
        height={10}
        color="#62C0CC"
      />
    </View>
  );
};

export default ProgressBar;