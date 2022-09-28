import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const HomeView = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Home = () => {
  return (
    <HomeView>
      <Text>Home Screen</Text>
    </HomeView>
  );
};
