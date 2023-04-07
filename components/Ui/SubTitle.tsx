import { Text, StyleSheet, View } from "react-native";
import { PropsWithChildren } from "react";
import { ReactNode } from "react";

interface Props {
  titleRight?: () => ReactNode;
}

export default function SubTitle(props: PropsWithChildren<Props>) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{props.children}</Text>
      {props.titleRight && <View>{props.titleRight()}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
