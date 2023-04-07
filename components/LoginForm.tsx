import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../lib/supabase";
import { Button, Input } from "react-native-elements";
import {
  TextInput,
  Pressable,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <Text style={styles.titleText}>Budget</Text>
      <Text style={styles.subTitleText}>Log ind</Text>
      <View style={[styles.verticallySpaced]}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder='email@address.com'
          textContentType='emailAddress'
          style={styles.input}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder='Password'
          textContentType='password'
          style={styles.input}
        />
      </View>
      <Pressable style={styles.button} onPress={() => signInWithEmail()}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Log ind</Text>
        )}
      </Pressable>
      {/* <View style={[styles.verticallySpaced]}>
        <Button
          title='Sign in'
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title='Sign up'
          disabled={loading}
          onPress={() => signUpWithEmail()}
        />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitleText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    marginBottom: 10,
    alignSelf: "stretch",
  },
  input: {
    fontSize: 16,
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#aeaeae",
    marginBottom: 0,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 1,
  },
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
