import { ScrollView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import styles from "../../../styles/GeneralStyles";
import InnerScreenContainer from "../../Ui/InnerScreenContainer";
import InputWrapper from "../../Ui/InputWrapper";

export default function AddIncomeScreen() {
  const [name, setName] = useState<string | undefined>();
  const [amount, setAmount] = useState<string | undefined>();

  return (
    <ScrollView scrollEnabled={false}>
      <View style={{ margin: 20 }}>
        <InputWrapper label='Titel'>
          <TextInput
            onChangeText={(text) => setName(text)}
            value={name}
            secureTextEntry={true}
            placeholder='Eks. "Andreas løn", "Camilla indbetaling"'
            placeholderTextColor='#999'
            style={styles.input}
          />
        </InputWrapper>
        <InputWrapper label='Beløb'>
          <TextInput
            onChangeText={(text) => setAmount(text)}
            value={amount}
            secureTextEntry={true}
            placeholder='Eks. 5500'
            placeholderTextColor='#999'
            inputMode='numeric'
            style={styles.input}
          />
        </InputWrapper>
      </View>
    </ScrollView>
  );
}
