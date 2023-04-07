import { View, ScrollView, SafeAreaView } from "react-native";
import { PropsWithChildren } from "react";

export default function InnerScreenContainer(props: PropsWithChildren) {
  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{
          height: "100%",
          marginHorizontal: 18,
          marginVertical: 25,
        }}
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}
