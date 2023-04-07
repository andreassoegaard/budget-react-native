import React from "react";
import { View, Text } from "react-native";
import { supabase } from "../../../lib/supabase";
import { Pressable, ActivityIndicator, StyleSheet } from "react-native";
import InnerScreenContainer from "../../Ui/InnerScreenContainer";
import SubTitle from "../../Ui/SubTitle";
import { Button } from "react-native";
import AddIncome from "./Buttons/AddIncome";
import AddFixedExpense from "./Buttons/AddFixedExpense";
import AddVariableExpense from "./Buttons/AddVariableExpense";

export default function HomeInnerScreen() {
  const [loading, setLoading] = React.useState(false);

  return (
    <InnerScreenContainer>
      <View style={{ marginBottom: 20, marginTop: 20 }}>
        <SubTitle titleRight={() => <AddIncome />}>Indtægter</SubTitle>
      </View>
      <View style={{ marginBottom: 20 }}>
        <SubTitle titleRight={() => <AddFixedExpense />}>
          Faste udgifter
        </SubTitle>
      </View>
      <View style={{ marginBottom: 20 }}>
        <SubTitle titleRight={() => <AddVariableExpense />}>
          Variable udgifter
        </SubTitle>
      </View>
    </InnerScreenContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 1,
    backgroundColor: "black",
    height: 50,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
});
