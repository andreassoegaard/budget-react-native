import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonAnimationView, fadeIn, fadeOut } from "./ButtonAnimation";
import styles from "./styles";

export default function AddIncome() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Pressable
      style={styles.button}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      onPress={() => navigation.navigate("AddIncome" as never)}
    >
      <ButtonAnimationView>
        <Text style={styles.buttonText}>+ Tilføj indtægt</Text>
      </ButtonAnimationView>
    </Pressable>
  );
}
