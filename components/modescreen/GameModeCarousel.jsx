import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const GameModeCarousel = () => {
    const navigation = useNavigation();

    const gameModes = [
        {
            title: "La classique",
            image: require("../../assets/modeC.jpg"),
            description: "Joue seul avec un ami",
            available: true,
        },
        {
            title: "Full Défi",
            image: require("../../assets/modeD.jpg"),
            description: "Joue avec des amis",
            available: false,
        },
        {
            title: "5-10-15",
            image: require("../../assets/modeJ.jpg"),
            description: "Joue avec des amis et des amis",
            available: false,
        },
    ];

    const renderItem = ({ item }) => (
        <View className="bg-white rounded-lg shadow-md overflow-hidden opacity-100 disabled:opacity-50">
            <Image
                source={item.image}
                className="w-full h-40"
                resizeMode="cover"
            />
            <View className="p-4">
                <Text className="text-cyan-900 text-center font-bold text-lg mb-2">
                    {item.title}
                </Text>
                <TouchableOpacity
                    onPress={() => item.available && navigation.navigate("Lobby")}
                    className={`py-2 px-4 rounded-full ${
                        item.available ? 'bg-cyan-700' : 'bg-gray-400'
                    }`}
                    disabled={!item.available}
                >
                    <Text className="text-white text-center">
                        {item.available ? 'Choisir' : 'Indisponible'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View className="h-72 justify-center items-center">
            <Carousel
                data={gameModes}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={250}
                loop
                autoplay
                autoplayInterval={5000}
            />
        </View>
    );
};

export default GameModeCarousel;