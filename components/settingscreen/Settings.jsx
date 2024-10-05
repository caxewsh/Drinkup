import React, { useState }  from "react";
import { View, Text, TouchableOpacity, FlatList, Share } from "react-native";
import { PencilSquareIcon, EnvelopeIcon, ShareIcon, StarIcon } from "react-native-heroicons/solid";
import Animated, { BounceInRight, Easing } from "react-native-reanimated";
import SuggestionModal from "./SuggestionModal";
import { Linking } from "react-native";


const Settings = () => {
  const [showModal, setShowModal] = useState(false);

  const showSuggestionModal = () => {
      setShowModal(true);
    };
  
    const contactUs = () => {
      const url = "mailto:contact@drinkup.app";
      
      Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            console.log("URL non supportée : " + url);
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => console.error("Erreur de lien", err));
    };
   
  
    const shareApp = () => {
      const onShare = async () => {
        try {
          const result = await Share.share({
            message: "J'ai trouvé Drinkup, un jeu de soirée entre amis qui vous permet de découvrir des nouvelles idées et des nouveautés !",
            url: "https://drinkup.app",
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // The user cancelled the share action
            } else {
              // Share was successful
            }
          } else if (result.action === Share.dismissedAction) {
            // The user dismissed the share action
          }
        } catch (error) {
          console.log(error);
        }
      };
      onShare();
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
          renderItem={({ item, index }) => (
            <Animated.View
            entering={BounceInRight.delay(index * 50).duration(1300).easing(Easing.inOut(Easing.quad))}
            className="flex-row items-center rounded-lg"> 
            <TouchableOpacity className="flex-row items-center mb-4 p-4 rounded-lg" onPress= {item.action} testID="optionButton" >
                {item.icon}
                <Text className="text-white text-lg font-black mx-6">{item.label}</Text>
            </TouchableOpacity>
            </Animated.View>
          )}
        />
        {showModal && <SuggestionModal showModal={showModal} setShowModal={setShowModal} />}
    </View>
  );
};

export default Settings;
