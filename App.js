import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppArea } from "./src/components/AppArea.component";
import { Home } from "./src/features/screens/Home.screen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppArea>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AppArea>
  );
}
