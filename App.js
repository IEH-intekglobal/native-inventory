//import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Colors } from "./src/constants/colors";
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
        initialRouteName="Menu"
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
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons name="albums-outline" size={size} color={color} />
              );
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
                  source={require("./assets/settingsButton.png")}
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
