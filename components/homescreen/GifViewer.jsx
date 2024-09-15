import React from "react";
import { View, Image } from "react-native";

const GifViewer = () => {
  return (
    <View className="flex justify-center items-center p-11 m-11">
      <Image
        style={{ width: 200, height: 200 }}
        src={"https://media.giphy.com/media/EFhW3ZuQoV4gW59sfg/giphy.gif"}
      />
    </View>
  );
};

export default GifViewer;