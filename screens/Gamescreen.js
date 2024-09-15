import {
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useImage } from "../provider/ImageContext";
import { supabase } from "../utils/supabase";
import GamescreenHeader from "../components/gamescreen/GamescreenHeader";
import ProgressBar from "../components/gamescreen/ProgressBar";
import GameCard from "../components/gamescreen/GameCard";
import NextRoundButton from "../components/gamescreen/NextRoundButton";

export default function Gamescreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [players, setPlayers] = useState([]);
  const { backgroundImageSource } = useImage();


  useEffect(() => {
    fetchQuestionsAndPlayers();
  }, []); // Fetch questions and players initially

  const fetchQuestionsAndPlayers = async () => {
    setIsLoading(true);
    try {
    let { data: questionsData, error } = await supabase.from("questions").select("*");
    if (error) throw error;
  
    if (!Array.isArray(questionsData)) {
      throw new TypeError("Fetched questions data is not an array");
    }
  
    const shuffledQuestions = shuffledArray(questionsData);
    setQuestions(shuffledQuestions);
  
    // Fetch players from AsyncStorage
    const playerData = await AsyncStorage.getItem("players");
    const parsedPlayers = JSON.parse(playerData) || [];
    
    if (!Array.isArray(parsedPlayers)) {
      throw new TypeError("Parsed players data is not an array");
    }
  
    const shuffledPlayers = shuffledArray(parsedPlayers);
    setPlayers(shuffledPlayers);
    } catch (error) {
    console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const shuffledArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  const navigation = useNavigation();
  
  const handleNextRound = () => {
    
    if (currentQuestionIndex + 1 >= questions.length) {
      // No more questions, navigate to Endscreen or reset for a new game
        navigation.navigate("End");
      } else {
        // Increment index to move to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } 
  };
  
  return (
    <View className="flex-1">
      <ImageBackground
        blurRadius={70}
        source={backgroundImageSource}
        resizeMode="cover"
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex-1 ">
        <StatusBar style="light" />
        {/* Header */}
        <GamescreenHeader />
        {/* ProgressBar */}
        <ProgressBar currentQuestionIndex={currentQuestionIndex} questions={questions} />
        {/* Game component */}
        <GameCard
          item={questions[currentQuestionIndex]}
          currentPlayer={players[currentQuestionIndex % players.length]}
          isLoading={isLoading}
          players={players}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
        />

        {/* Button */}
        <NextRoundButton onPress={handleNextRound} isLoading={isLoading} />
      </SafeAreaView>
    </View>
  );
}
