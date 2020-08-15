import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { Colors } from "~/config/color";

export const Container = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${Colors.primary};
`;
