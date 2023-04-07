import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { supabase } from "../../../lib/supabase";
import { Pressable, ActivityIndicator, StyleSheet } from "react-native";
import InnerScreenContainer from "../../Ui/InnerScreenContainer";

export default function SettingsScreen() {
  const [loading, setLoading] = React.useState(false);

  return (
    <InnerScreenContainer>
      <View style={{ marginTop: 20 }}>
        <Pressable
          style={styles.button}
          onPress={() => supabase.auth.signOut()}
        >
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Log ud</Text>
          )}
        </Pressable>
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
    height: 40,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
