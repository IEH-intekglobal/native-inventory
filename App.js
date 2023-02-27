//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import DashboardScreen from "./src/screens/Dashboard";
import ItemsScreen from "./src/screens/Items";
import SearchScreen from "./src/screens/Search";
import NotificationsScreen from "./src/screens/Notifications";
import SettingsScreen from "./src/screens/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Items"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#ec1d2f",
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="grid" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Items"
          component={ItemsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="albums" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="search" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name="notifications" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="settings" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
