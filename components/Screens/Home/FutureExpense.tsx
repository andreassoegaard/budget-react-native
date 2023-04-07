import { View, Text, StyleSheet } from "react-native";

export default function FutureExpense() {
  return (
    <View style={styles.box}>
      <View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#d9534f",
            backgroundColor: "#fff",
            borderRadius: 15,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "500" }}>
            25
          </Text>
          <Text style={{ color: "#d9534f", fontSize: 12 }}>feb</Text>
        </View>
      </View>
      <View style={{ flexGrow: 1, paddingVertical: 10, paddingHorizontal: 15 }}>
        <View style={{ marginBottom: 2 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>1495 kr.</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#666", fontSize: 12 }}>Tryg Forsikring</Text>
          <Text style={{ color: "#666", fontSize: 12 }}>25. februar 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 0,
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    flexGrow: 1,
    marginBottom: 10,
  },
});
