import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function AddFixedExpense() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate("AddFixedExpense" as never)}
    >
      <Text style={styles.buttonText}>+ Tilføj fast udgift</Text>
    </Pressable>
  );
}
