import "react-native-gesture-handler";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import LogInScreen from "./src/screens/LogIn";
import SignUpScreen from "./src/screens/SignUp";
import { BottomTabsNavigation } from "./src/navigation/BottomTabsNavigation";
import ItemDetailsScreen from "./src/screens/ItemDetails";
import { useState } from "react";

const Stack = createStackNavigator();
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Main"
              component={BottomTabsNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LogIn"
              component={LogInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
