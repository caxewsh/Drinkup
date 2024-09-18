import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TrashIcon } from "react-native-heroicons/solid";

const TrashButton = ({ onPress }) => {
  return (
    <View className="">
      <TouchableOpacity
        onPress={onPress}
        className=""
      >
          <TrashIcon color="gray" size="23" className="mr-2" />
      </TouchableOpacity>
    </View>
  );
};

export default TrashButton;