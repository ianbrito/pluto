import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
import { Profile } from "./components/Profile";
import { Card, Description, Value } from "./components/Transaction";
import {
  BalanceContainer,
  BalanceDescription,
  BalanceValue,
  HeaderBar,
  HeaderBarTitle,
  HeaderWrapper,
  InformationContainer,
  TransactionsContainer,
} from "./styles";

export const Header = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const YeyButtom = () =>
    show ? (
      <Feather name="eye" size={24} color="#fff" onPress={handleShow} />
    ) : (
      <Feather name="eye-off" size={24} color="#fff" onPress={handleShow} />
    );

  return (
    <HeaderWrapper>
      <HeaderBar>
        <Profile />
      </HeaderBar>
      <InformationContainer>
        <BalanceContainer>
          <BalanceDescription>Saldo em conta</BalanceDescription>
          <View style={style.BalanceValueContainer}>
            <BalanceValue numberOfLines={1}>R$1000,00</BalanceValue>
            <YeyButtom />
          </View>
        </BalanceContainer>
        <TransactionsContainer>
          <Card>
            <View style={style.DescriptionContainer}>
              <Description>Receitas</Description>
              <Ionicons name="md-arrow-dropup" size={24} color="#42f551" />
            </View>
            <Value style={{ color: "#42f551" }}>R$1000,00</Value>
          </Card>
          <Card>
            <View style={style.DescriptionContainer}>
              <Description>Despesas</Description>
              <Ionicons name="md-arrow-dropdown" size={24} color="#db110d" />
            </View>
            <Value style={{ color: "#db110d" }}>R$1000,00</Value>
          </Card>
        </TransactionsContainer>
      </InformationContainer>
    </HeaderWrapper>
  );
};

const style = StyleSheet.create({
  BalanceValueContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
