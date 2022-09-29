import { TouchableOpacity, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components";

const BackgroundCut = styled(View)`
  padding: 10px;
  background: #edf2f4;
  border-radius: 70px;
  padding: 20px;
  margin: 0;
  justify-content: center;
  top: -25px;
  position: relative;
  height: 70px;
  width: 70px;
  align-items: center;
  border-radius: 70px;
`;
const AddButtonBody = styled(TouchableOpacity)`
  background: #4361ee;
  padding: 10px;
  margin: 0;
  justify-content: center;
  position: relative;
  height: 60px;
  width: 60px;
  align-items: center;
  border-radius: 60px;
`;
const Title = styled(Text)`
  color: white;
`;
const Icon = styled(Feather)`
  color: white;
`;

export { BackgroundCut, AddButtonBody, Icon, Title };
