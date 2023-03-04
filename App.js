import "react-native-gesture-handler";
//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import LogIn from "./src/screens/LogIn";
import { BottomTabsNavigation } from "./src/navigation/BottomTabsNavigation";
import ItemDetailsScreen from "./src/screens/ItemDetails";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LogIn />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabsNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
