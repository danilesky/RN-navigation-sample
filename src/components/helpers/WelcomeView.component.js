import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Body = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #edf2f4;
`;

export const WelcomeView = ({ text }) => {
  return (
    <Body>
      <Text>{text}</Text>
    </Body>
  );
};
