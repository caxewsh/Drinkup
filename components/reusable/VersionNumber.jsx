import React from "react";
import { View, Text } from "react-native";
import * as Application from "expo-application";

const VersionNumber = () => {
  return (
    <View className="absolute bottom-0 right-0 m-6">
      <Text className=" text-gray-500 text-xs font-bold">v{Application.nativeApplicationVersion}</Text>
    </View>
  );
};

export default VersionNumber;