import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";

export default function LogIn() {
  return (
    <View style={styles.screenContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={"email"}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        autoFocus={true}
        inputMode="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder={"password"}
        secureTextEntry={true}
      />
      <View style={styles.logInButtonContainer}>
        <Pressable
          style={styles.logInButton}
          android_ripple={{ color: "pink" }}
        >
          <Text style={styles.logInButtonText}>Log In</Text>
        </Pressable>
      </View>
      <Pressable style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    borderRadius: 8,
    padding: 10,
  },
  logInButtonContainer: {
    alignItems: "center",
  },
  logInButton: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 30,
    elevation: 10,
    borderRadius: 5,
  },
  logInButtonText: {
    color: "white",
  },
  registerButton: {
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  registerButtonText: {
    color: Colors.primary,
  },
});
