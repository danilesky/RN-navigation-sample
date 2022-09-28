import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AppArea } from "./src/components/AppArea.component";

export default function App() {
  return (
    <AppArea>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </AppArea>
  );
}
