import React from "react";
import { View, Text } from "react-native";
import { InformationCircleIcon } from "react-native-heroicons/solid";

const InfoBloc = ({ info }) => {
  return (
    <View className="flex-row items-center m-4 p-4 rounded-lg" style={{ backgroundColor: "rgba(0, 255, 255, 0.1)" }}>
      <InformationCircleIcon color="white" size="25" className="" />
      <Text className="text-white font-semibold text-left text-xs m-2">
        {info}
      </Text>
    </View>
  );
};

export default InfoBloc;