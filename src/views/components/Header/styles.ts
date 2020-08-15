import styled from "styled-components/native";
import { Colors } from "~/config/color";

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${Colors.secondary};
  padding: 4px 8px 16px 8px;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const HeaderBar = styled.View`
  height: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderBarTitle = styled.Text`
  flex: 1;
  font-family: "Lato_Regular";
  font-size: 18px;
  text-align: center;
  color: ${Colors.secondaryText};
`;

export const InformationContainer = styled.View`
  flex: 1;
  width: 80%;
  justify-content: space-around;
  align-self: center;
`;

export const BalanceContainer = styled.View`
  width: 100%;
`;

export const BalanceDescription = styled.Text`
  font-family: "Lato_Regular";
  font-size: 14px;
  color: ${Colors.secondaryText};
`;

export const BalanceValue = styled.Text`
  font-family: "Lato_Regular";
  font-size: 24px;
  color: ${Colors.secondaryText};
`;

export const TransactionsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Saldo = styled.Text``;
