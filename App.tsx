import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import LoginForm from "./components/LoginForm";
import AppWrapper from "./components/AppWrapper";
import { View, SafeAreaView } from "react-native";
import { Session } from "@supabase/supabase-js";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/Screens/HomeScreen";
import SettingsScreen from "./components/Screens/SettingsScreen";
import BudgetScreen from "./components/Screens/BudgetScreen";
import ExpensesScreen from "./components/Screens/ExpensesScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import type { StatusBarStyle } from "react-native";
import { StatusBar } from "expo-status-bar";

const STYLES = ["default", "dark-content", "light-content"] as const;
const TRANSITIONS = ["fade", "slide", "none"] as const;

export default function App() {
  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[2]
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    "fade" | "slide" | "none"
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  let content;

  if (session && session.user) {
    content = (
      <>
        <SafeAreaProvider>
          <StatusBar style='dark' />
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }: any) => ({
                tabBarIcon: ({ focused, color, size }: any) => {
                  let iconName;

                  if (route.name === "HomeScreen") {
                    iconName = focused ? "ios-home" : "ios-home-outline";
                  } else if (route.name === "SettingsScreen") {
                    iconName = focused ? "ios-cog" : "ios-cog-outline";
                  } else if (route.name === "BudgetScreen") {
                    iconName = focused ? "ios-journal" : "ios-journal-outline";
                  } else if (route.name === "ExpensesScreen") {
                    iconName = focused ? "ios-receipt" : "ios-receipt-outline";
                  } else {
                    iconName = "ios-home";
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false, title: "Forside" }}
              />
              <Tab.Screen
                name='ExpensesScreen'
                component={ExpensesScreen}
                options={{ headerShown: false, title: "Udgifter" }}
              />
              <Tab.Screen
                name='BudgetScreen'
                component={BudgetScreen}
                options={{ headerShown: false, title: "Budget" }}
              />
              <Tab.Screen
                name='SettingsScreen'
                component={SettingsScreen}
                options={{ headerShown: false, title: "Indstillinger" }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </>
    );
  } else {
    content = <LoginForm />;
  }

  return content;
}
