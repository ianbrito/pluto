import React from "react";
import { ActivityIndicator, StatusBar } from "react-native";
import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { useFonts } from "expo-font";
import { Routes } from "./routes";
import { Colors } from "./config/color";
export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_Regular: Lato_400Regular,
    Lato_Bold: Lato_700Bold,
  });

  if (!fontsLoaded) return <ActivityIndicator />;
  return (
    <>
      <Routes />
      <StatusBar backgroundColor={Colors.secondary} translucent />
    </>
  );
}
