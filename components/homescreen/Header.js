import React from "react";
import { View, Text, Image } from "react-native";

const Header = () => {
  return (
    <View className="pb-4 m-4 justify-center items-center">
      <Text className="text-white text-2xl font-black">DRINK'UP     </Text> 
      <Image
        className="w-12 h-12 left-20 bottom-10 bg-white rounded-xl"
        source={require("../../assets/Icon-83.5_2x-removebg-preview.png")}
      />
    </View>
  );
};

export default Header;