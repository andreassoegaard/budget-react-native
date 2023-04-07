import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExpensesInnerScreen from "./Expenses/ExpensesInnerScreen";
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

export default function ExpensesScreen() {
  const [loading, setLoading] = React.useState(false);
  const HomeStack = createNativeStackNavigator();

  const handleSearch = (event: any) => {};

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Udgifter'
        component={ExpensesInnerScreen}
        options={{
          headerLargeTitle: true,
          headerSearchBarOptions: {
            onChangeText: (event) => handleSearch(event),
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
