import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

//Making flexible AppArea component to prevent SafeArea on android

export const AppArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
