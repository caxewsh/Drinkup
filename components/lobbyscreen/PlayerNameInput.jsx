import React from "react";
import { View, TextInput } from "react-native";

const PlayerNameInput = ({ onChangeText, onSubmitEditing, value }) => {
  return (
    <View className="flex justify-center items-center">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        textAlign="center"
        placeholder="Nom du joueur"
        className=" bg-white font-semibold w-5/6 mx-4 h-10 px-4 py-1 rounded-md"
      />
    </View>
  );
};

export default PlayerNameInput;