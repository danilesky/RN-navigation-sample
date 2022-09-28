import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AppArea } from "./src/components/utils/AppArea.component";
import { About } from "./src/features/screens/About.screen";
import { Contact } from "./src/features/screens/Contact.screen";
import { Home } from "./src/features/screens/Home.screen";
import tabSettings from "./src/features/utility/tab-bar-settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppArea>
      <NavigationContainer>
        <Tab.Navigator screenOptions={tabSettings}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </AppArea>
  );
}
