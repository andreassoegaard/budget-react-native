import React, { useState } from "react";
import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonAnimationView, fadeIn, fadeOut } from "./ButtonAnimation";
import styles from "./Styles";

export default function AddVariableExpense() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Pressable
      style={styles.button}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      onPress={() => navigation.navigate("AddVariableExpense" as never)}
    >
      <ButtonAnimationView>
        <Text style={styles.buttonText}>+</Text>
      </ButtonAnimationView>
    </Pressable>
  );
}
