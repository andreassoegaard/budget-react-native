import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeInnerScreen from "./Home/HomeInnerScreen";

export default function HomeScreen() {
  const [loading, setLoading] = React.useState(false);
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Forside'
        component={HomeInnerScreen}
        options={{
          headerLargeTitle: true,
        }}
      />
    </HomeStack.Navigator>
  );
}
