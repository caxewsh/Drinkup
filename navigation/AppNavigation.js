import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Homescreen";
import { LogBox } from "react-native";
import Lobbyscreen from "../screens/Lobbyscreen";
import Gamescreen from "../screens/Gamescreen";
import Endscreen from "../screens/Endscreen";
import SettingScreen from "../screens/SettingScreen";
import Modescreen from "../screens/Modescreen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Lobby"
          options={{ headerShown: false }}
          component={Lobbyscreen}
        />
        <Stack.Screen
          name="Game"
          options={{ headerShown: false }}
          component={Gamescreen}
        />
        <Stack.Screen
          name="End"
          options={{headerShown:false}}
          component={Endscreen}
        />
        <Stack.Screen
          name="Setting"
          options={{ headerShown: false }}
          component={SettingScreen}
        />
        <Stack.Screen
          name="Mode"
          options={{ headerShown: false }}
          component={Modescreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
