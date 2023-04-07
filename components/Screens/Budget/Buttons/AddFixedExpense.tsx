import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonAnimationView, fadeIn, fadeOut } from "./ButtonAnimation";
import styles from "./styles";

export default function AddFixedExpense() {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.button}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      onPress={() => navigation.navigate("AddFixedExpense" as never)}
    >
      <ButtonAnimationView>
        <Text style={styles.buttonText}>+ Tilføj fast udgift</Text>
      </ButtonAnimationView>
    </Pressable>
  );
}
