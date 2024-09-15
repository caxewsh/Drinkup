import React from "react";
import { View, Text } from "react-native";

const EndscreenCard = () => {
  return (
    <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex-1 justify-center w-78 m-10 mx-4 p-10 rounded-lg"
        >
          <Text className=" text-white font-semibold text-center text-sm">
            Merci d'avoir participé à la beta. Faites nous part de vos retour
            via le lien ci-dessous :
          </Text>
        </View>
  );
};

export default EndscreenCard;