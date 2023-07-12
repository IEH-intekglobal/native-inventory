import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ItemsScreen from "../screens/Items";
import DashboardScreen from "../screens/Dashboard";
import SettingsScreen from "../screens/Settings";
import SearchScreen from "../screens/Search";
import NotificationsScreen from "../screens/Notifications";

import { Colors } from "../constants/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export function BottomTabsNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Items"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="grid-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          //headerShown: false,
          //tabBarLabel: "Items",
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="albums-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={require("../../assets/settingsButton.png")}
                style={
                  !focused
                    ? styles.settingsButton
                    : styles.focusedSettingsButton
                }
              />
            );
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
              <Ionicons
                name="notifications-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  focusedSettingsButton: {
    width: 55,
    height: 55,
    marginTop: 5,
  },
  settingsButton: {
    width: 45,
    height: 45,
    marginTop: 10,
  },
});
