import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function AddVariableExpense() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("AddVariableExpense" as never)}
    >
      <Text style={styles.buttonText}>+ Tilføj variabel udgift</Text>
    </Pressable>
  );
}
