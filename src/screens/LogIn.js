import { useContext, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/colors";
import { logIn } from "../auth/firestore";

import { SetterContext } from "../state/context";

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUserToken } = useContext(SetterContext);

  function goToSignupScreen() {
    navigation.navigate("SignUp");
  }

  function handleLogIn() {
    logIn(email, password).then((user) => {
      const token = user.stsTokenManager.accessToken;
      setUserToken(token);
    });
  }
  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Log In</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={"email"}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        //autoFocus={true}
        inputMode="email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"password"}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.logInButtonContainer}>
        <Pressable
          style={styles.logInButton}
          android_ripple={{ color: "pink" }}
          onPress={handleLogIn}
        >
          <Text style={styles.logInButtonText}>Log In</Text>
        </Pressable>
      </View>
      <Pressable style={styles.registerButton} onPress={goToSignupScreen}>
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
  titleContainer: {
    //backgroundColor: "pink",
    flex: 1 / 4,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 26,
    color: Colors.primary,
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
