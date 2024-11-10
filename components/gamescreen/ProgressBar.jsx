import React from "react";
import { View, Text } from "react-native";
import * as Progress from "react-native-progress";

const ProgressBar = ({ currentQuestionIndex, questions }) => {
  return (
    <View
      className="flex justify-center items-center m-4 p-2 rounded-lg"
    >
      <Progress.Bar
        progress={(currentQuestionIndex + 1) / questions.length}
        width={300}
        height={10}
        color="#FFFFFF"
      />
    </View>
  );
};

export default ProgressBar;