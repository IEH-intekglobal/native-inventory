import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Avatar } from "@rneui/themed";
import { Colors } from "../constants/colors";
import { logOut } from "../network/auth";
import { useContext } from "react";

import { SetterContext } from "../state/context";

function MenuOption({ icon, children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={25} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}> {children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Settings() {
  const { setUserToken } = useContext(SetterContext);

  function defaultPresser() {
    console.log("pressing");
  }

  function handleLogOut() {
    setUserToken(null);
    logOut();
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.userInfo}>
        <Avatar
          size={50}
          rounded
          title="U"
          containerStyle={{ backgroundColor: Colors.softGray }}
        />

        <Text style={styles.userName}>Username</Text>
        <Text style={styles.userMail}>user@leica.com</Text>
      </View>
      <View>
        <MenuOption icon="person-outline" onPress={defaultPresser}>
          User Profile
        </MenuOption>
        <MenuOption icon="settings-outline" onPress={defaultPresser}>
          Settings
        </MenuOption>
        <MenuOption icon="file-tray-full-outline" onPress={defaultPresser}>
          Company Details
        </MenuOption>
        <MenuOption icon="pie-chart-outline" onPress={defaultPresser}>
          Reports
        </MenuOption>
        <MenuOption icon="cloud-upload-outline" onPress={defaultPresser}>
          Bulk Import
        </MenuOption>
        <MenuOption icon="help-circle-outline" onPress={defaultPresser}>
          Help
        </MenuOption>
        <MenuOption icon="log-out-outline" onPress={handleLogOut}>
          Sign Out
        </MenuOption>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>SupplyLeica</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  avatarContainer: {
    margin: 10,
  },
  userInfo: {
    marginTop: 10,
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.softGray,
  },
  optionTextContainer: {
    flex: 1,
    borderBottomColor: Colors.softGray,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  optionText: {
    textAlignVertical: "center",
  },
  userName: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  userMail: {
    color: "gray",
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  optionIconContainer: {
    margin: 15,
  },
  footer: {
    justifyContent: "center",
    flex: 1,
  },
  footerText: {
    color: "gray",
    textAlign: "center",
    fontSize: 10,
    marginTop: 5,
  },
});
