import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ButtonAnimationView, fadeIn, fadeOut } from "./ButtonAnimation";
import styles from "./Styles";

export default function AddIncome() {
  const navigation = useNavigation();
  return (
    <ButtonAnimationView>
      <Pressable
        style={styles.button}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        onPress={() => navigation.navigate("AddIncome" as never)}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </ButtonAnimationView>
  );
}
