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
      {props.titleRight && (
        <View style={{ marginLeft: 10 }}>{props.titleRight()}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  subTitleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
  },
});
