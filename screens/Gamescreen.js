import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { useImage } from "../provider/ImageContext";

export default function Gamescreen() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [players, setPlayers] = useState([]);
  const port = 3000;
  const { backgroundImageSource } = useImage();

  useEffect(() => {
    fetchQuestions();
    fetchPlayers();
  }, []); // Fetch questions and players initially

  const fetchQuestions = () => {
    fetch(`http://192.168.1.66:${port}/api/questions`)
      .then((response) => response.json())
      .then((data) => {
        const shuffledQuestions = shuffledArray(data);
        setQuestions(shuffledQuestions);
        console.log("Success fetching questions from API");
      })
      .catch((error) => {
        console.error("Error fetching questions from API:", error);
      });
  };

  const fetchPlayers = () => {
    AsyncStorage.getItem("players")
      .then((playerData) => {
        const parsedPlayers = JSON.parse(playerData) || [];
        const shuffledPlayers = shuffledArray(parsedPlayers);
        setPlayers(shuffledPlayers);
        console.log("Success fetching player from asyncStorage");
      })
      .catch((error) => {
        console.error("Error fetching questions from API:", error);
      });
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

  const handleNextRound = () => {
    if (currentQuestionIndex + 1 >= questions.length) {
      // No more questions, navigate to Endscreen
      navigation.navigate("End");
    } else {
      // Fetch new questions and players for the next round
      fetchQuestions();
      fetchPlayers();
      // Update the current question index
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const renderQuestion = ({ item }) => {
    if (questions.length === 0 || players.length === 0) {
      return null; // or loading indicator
    }

    console.log("rendering questions start");

    const currentPlayer = players[currentQuestionIndex % players.length];

    if (!item) {
      // No more questions, navigate to Endscreen
      navigation.navigate("End");
      return null;
    }

    return (
      <View className="items-center">
        <Text className=" text-gray-800 italic font-semibold text-center text-sm">
          Thème : {item.Theme}
        </Text>
        <Text className="text-3xl text-white font-black p-4">
          {currentPlayer.name}
        </Text>
        <Text className="text-white font-semibold text-center text-sm">
          {item.Questions}
        </Text>
      </View>
    );
  };

  const navigation = useNavigation();
  const goToHomescreen = () => {
    navigation.navigate("Home");
    AsyncStorage.clear();
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
        <View className="flex-row m-4 pb-10">
          <TouchableOpacity
            className="absolute left-8"
            onPress={goToHomescreen}
          >
            <HomeIcon color="white" size="30" className="" />
          </TouchableOpacity>
          <Text className="text-white absolute right-32 text-2xl font-black">
            DRINKUP
          </Text>
        </View>
        {/* ProgressBar */}
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className="flex justify-center items-center m-4 p-4 rounded-lg"
        >
          <Text className=" text-white font-black text-lg m-2">
            On en est où ?
          </Text>
          <Progress.Bar
            progress={(currentQuestionIndex + 1) / questions.length}
            width={300}
            height={10}
            color="#62C0CC"
          />
        </View>
        {/* Game component */}
        <View
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          className=" flex m-10 p-10 mx-4 rounded-lg items-center"
        >
          {questions.length > 0 ? (
            <FlatList
              horizontal={false}
              data={[questions[currentQuestionIndex]]}
              keyExtractor={(item) => item._id.toString()}
              renderItem={renderQuestion}
            />
          ) : (
            <>
            <ActivityIndicator size="large" className=" m-4"/>
            <Text className=" text-white font-semibold text-center text-sm">Loading questions...</Text>
            </>
          )}
        </View>
        {/* Button */}
        <View className="flex  justify-center items-center ">
          <TouchableOpacity
            onPress={handleNextRound}
            className=" bg-white w-40 px-4 py-4 border-solid rounded-lg mt-4 justify-center align-items-center"
          >
            <Text className="text-cyan-900 text-sm text-center font-bold">
              TOUR SUIVANT
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
