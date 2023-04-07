import { useState, useCallback } from "react";
import type { StatusBarStyle } from "react-native";
import { View, Text, ScrollView } from "react-native";
import { supabase } from "../../../lib/supabase";
import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import SubTitle from "../../Ui/SubTitle";
import InnerScreenContainer from "../../Ui/InnerScreenContainer";
import ExpensesSlider from "./ExpensesSlider";

export default function HomeInnerScreen() {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const promise = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("OK");
      }, 2000);
    });

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await promise();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <InnerScreenContainer>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SubTitle>Overblik</SubTitle>
        <View style={{ marginBottom: 10 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#1A7431",
              borderRadius: 15,
              padding: 22,
              // shadowColor: "#054a29",
              // shadowOffset: { width: 0, height: 10 },
              // shadowOpacity: 0.1,
              // shadowRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontWeight: "600",
                marginBottom: 3,
              }}
            >
              Tilbageværende madbudget
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 36,
                  fontWeight: "700",
                }}
              >
                546
              </Text>
              <Text
                style={{
                  color: "#FFF",
                  fontWeight: "600",
                  paddingBottom: 3,
                  marginLeft: 5,
                }}
              >
                kr. / 4.000 kr.
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  width: "100%",
                  height: 7,
                  backgroundColor: "#208B3A",
                  position: "relative",
                  borderRadius: 50,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    width: "80%",
                    height: 7,
                    backgroundColor: "#B7EFC5",
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <ExpensesSlider />
        </View>
        <SubTitle>Kommende udgifter</SubTitle>
      </ScrollView>
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
