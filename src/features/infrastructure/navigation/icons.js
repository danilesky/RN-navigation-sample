import React from "react";
import { Feather } from "@expo/vector-icons";

//NOTE : ONLY WORKS FOR FEATHER ICONS !!!

const navigation = {
  Home: "home",
  About: "book-open",
  Contact: "mail",
};

const navigationIcons = (icons, currentRoute, color) => {
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

export { navigation, navigationIcons };
