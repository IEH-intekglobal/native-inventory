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
  const [userToken, setUserToken] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken ? (
          <>
            <Stack.Screen
              name="Main"
              initialParams={{ setUserToken }}
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
              initialParams={{ setUserToken }}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              initialParams={{ setUserToken }}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
