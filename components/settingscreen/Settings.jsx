import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { PencilSquareIcon, EnvelopeIcon, ShareIcon, StarIcon } from "react-native-heroicons/solid";

const Settings = () => {
    const showSuggestionModal = () => {
      console.log("Showing suggestion modal");
    };
  
    const contactUs = () => {
      console.log("Contacting us");
    };
  
    const shareApp = () => {
      console.log("Sharing the app");
    };
  
    const rateApp = () => {
      console.log("Rating the app");
    };
    const items = [
        { id: "1", label: "Proposer des questions", action: showSuggestionModal, icon: <PencilSquareIcon color="white" size="30" testID="suggestionButton" /> },
        { id: "2", label: "Nous contacter", action: contactUs, icon: <EnvelopeIcon color="white" size="30" testID="contactButton" /> },
        { id: "3", label: "Partager l'application", action: shareApp, icon: <ShareIcon color="white" size="30" testID="shareButton" /> },
        { id: "4", label: "Evaluer l'application", action: rateApp, icon: <StarIcon color="white" size="30" testID="rateButton" /> },
      ];

  return (
    <View className="flex-row m-4 pb-10">
        <FlatList
          data={items}
          scrollEnabled={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-row items-center mb-4 p-4 bg-gray-500 rounded-lg" onPress= {item.action} testID="optionButton">
                {item.icon}
                <Text className="text-white text-lg font-black mx-6">{item.label}</Text>
            </TouchableOpacity>
          )}
        />
    </View>
  );
};

export default Settings;
