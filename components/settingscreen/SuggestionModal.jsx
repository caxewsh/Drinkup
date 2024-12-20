import React from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";

const SuggestionModal = ({ showModal, setShowModal }) => {
  const [suggestion, setSuggestion] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (text) => {
    setSuggestion(text);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Submitted suggestion");
    setShowModal(false); // Close the modal after submission
  };

  return (
    <Modal
    className="rounded-xl border-zinc-600 border-6"
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false); // Fermer la modale avec le bouton back ou autre
      }}
    >
      <View className="flex-1 justify-center items-center bg-black/50" >
        {/* Modale centrée */}
        <View className=" p-6 rounded-lg w-11/12" style={{ backgroundColor: "rgba(24, 164, 129, 0.9)" }} >
            <View className="flex">
                <TouchableOpacity onPress={() => setShowModal(false)} className="self-end">
                    <XCircleIcon color="white" size="30" className="mb-4" testID="exitModalButton" />
                </TouchableOpacity>
            </View>
          <Text className="text-white text-center text-lg font-bold mb-4">
            Ecris-nous ta suggestion :
          </Text>
          <TextInput
            editable={true}
            multiline={true}
            numberOfLines={4}
            maxLength={50}
            className="bg-white font-semibold p-3 rounded-lg mb-4"
            placeholder="Tape ici tes idées"
            onChangeText={handleChange}
            value={suggestion}
          />
          <TouchableOpacity 
            onPress={handleSubmit} 
            className="self-end bg-black p-2 rounded-xl"
            accessibilityLabel="Envoyer">
            <Text className="text-white text-lg font-semibold mx-2">{isSubmitting ? "Envoi en cours..." : "Envoyer"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SuggestionModal;
