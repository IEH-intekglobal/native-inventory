import { createStackNavigator } from "@react-navigation/stack";
import type { NavigationProp } from "@react-navigation/native";




export type RootStackParamsList = {
  ItemDetails: { id: string };
  SignUp: undefined,
  LogIn: undefined,
};
export type AppNavigationProps = NavigationProp<RootStackParamsList>

export const Stack = createStackNavigator<RootStackParamsList>();
