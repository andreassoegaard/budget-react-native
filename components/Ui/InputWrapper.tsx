import { PropsWithChildren } from "react";
import { View, Text } from "react-native";

interface Props {
  label?: string;
}

export default function InputWrapper(props: PropsWithChildren<Props>) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: "500", marginBottom: 5 }}>{props.label}</Text>
      <View>{props.children}</View>
    </View>
  );
}
