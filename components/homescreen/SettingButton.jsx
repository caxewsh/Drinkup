import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Cog6ToothIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const SettingButton = () => {
  const navigation = useNavigation();
  const goToSetting = () => {
    navigation.navigate("Setting");
  };

  return (
    <View className="flex-row m-4 pb-10">
      <TouchableOpacity
        className="absolute left-8"
        onPress={goToSetting}
        testID="settingButton"
      >
        <Cog6ToothIcon color="white" size="30" className="" />
      </TouchableOpacity>
    </View>
  );
};

export default SettingButton;