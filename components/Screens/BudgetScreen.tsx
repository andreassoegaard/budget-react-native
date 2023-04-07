import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BudgetInnerScreen from "./Budget/BudgetInnerScreen";
import AddIncomeScreen from "./Budget/AddIncomeScreen";
import AddFixedExpenseScreen from "./Budget/AddFixedExpenseScreen";
import AddVariableExpenseScreen from "./Budget/AddVariableExpenseScreen";

export default function HomeScreen() {
  const [loading, setLoading] = React.useState(false);
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Budget'
        component={BudgetInnerScreen}
        options={{
          headerLargeTitle: true,
        }}
      />
      <HomeStack.Screen
        name='AddIncome'
        component={AddIncomeScreen}
        options={{ title: "Tilføj indtægt" }}
      />
      <HomeStack.Screen
        name='AddFixedExpense'
        component={AddFixedExpenseScreen}
        options={{ title: "Tilføj fast udgift" }}
      />
      <HomeStack.Screen
        name='AddVariableExpense'
        component={AddVariableExpenseScreen}
        options={{ title: "Tilføj variabel udgift" }}
      />
    </HomeStack.Navigator>
  );
}
