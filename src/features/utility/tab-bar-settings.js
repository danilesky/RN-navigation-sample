import React from "react";
import { Feather } from "@expo/vector-icons";

//NOTE : ONLY WORKS FOR FEATHER ICONS !!!

const TAB_NAVIGATION = {
  Home: "home",
  About: "book-open",
  Contact: "mail",
};

const navigationIcon = (icons, currentRoute, color) => {
  let listRoutes = Object.keys(icons);
  let listIcons = Object.values(icons);

  let iconName;
  listRoutes.map((route, index) => {
    if (currentRoute.name === route) {
      iconName = listIcons[index];
    }
  });

  return <Feather name={iconName} size={24} color={color} />;
};

const tabSettings = ({ route }) => ({
  tabBarIcon: ({ color }) => navigationIcon(TAB_NAVIGATION, route, color),
});

export default tabSettings;
