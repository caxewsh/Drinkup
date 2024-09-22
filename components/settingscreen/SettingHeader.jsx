import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/solid";


export default function SettingHeader( {title, onPress} ) {
  return (
    <View className="flex-row m-4 pb-10">
        <TouchableOpacity className=" bg-white w-10 h-10 items-start justify-center rounded-full m-2 " onPress={onPress} testID="homeButton">
            <ChevronLeftIcon
            color="black"
            size="35"
            className=""
            />
        </TouchableOpacity>
        <View className="flex-1 justify-center items-center">
            <Text className="text-white items-start text-2xl font-black">{title}</Text>
        </View>
    </View>
  );
}
