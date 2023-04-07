import React from "react";
import { View, Text } from "react-native";
import { supabase } from "../../../lib/supabase";
import { Pressable, ActivityIndicator, StyleSheet } from "react-native";
import InnerScreenContainer from "../../Ui/InnerScreenContainer";

export default function HomeInnerScreen() {
  const [loading, setLoading] = React.useState(false);

  return <InnerScreenContainer></InnerScreenContainer>;
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
