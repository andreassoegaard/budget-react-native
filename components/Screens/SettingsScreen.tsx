import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsInnerScreen from "./Settings/SettingsInnerScreen";

export default function HomeScreen() {
  const [loading, setLoading] = React.useState(false);
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Indstillinger'
        component={SettingsInnerScreen}
        options={{
          headerLargeTitle: true,
        }}
      />
    </HomeStack.Navigator>
  );
}
