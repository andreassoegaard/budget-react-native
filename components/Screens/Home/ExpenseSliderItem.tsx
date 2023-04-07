import { View, Text, StyleSheet } from "react-native";

export default function ExpenseSliderItem() {
  return (
    <View style={styles.box}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.boxTitle}>Føtex</Text>
        <Text style={styles.boxDate}>1. marts 2023</Text>
      </View>
      <View>
        <Text style={styles.amountText}>250 kr.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    width: 250,
    padding: 20,
    borderRadius: 15,
  },
  boxTitle: {
    color: "#999",
    fontWeight: "500",
  },
  boxDate: {
    color: "#999",
    fontSize: 12,
  },
  amountText: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 3,
  },
});
