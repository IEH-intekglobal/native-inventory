import { useContext, useState } from "react";
import { Alert, Pressable, StyleSheet, TextInput } from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { registerUser } from "../network/auth";

import { SetterContext } from "../state/context";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [password, setPassword] = useState("");
  const { setUserToken } = useContext(SetterContext);

  function goToLogIn() {
    navigation.navigate("LogIn");
  }

  function handleRegister() {
    if (confPassword !== password) {
      Alert.alert(
        "Invalid data",
        "The password and the confirmation password must be the same"
      );
      return;
    }

    registerUser(email, password).then((user) => {
      const token = user.stsTokenManager.accessToken;
      setUserToken(token);
    });
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Sign Up</Text>
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={"username"}
        autoCorrect={false}
        //autoFocus={true}
        value={username}
        onChangeText={setUsername}
      />
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
      <TextInput
        style={styles.textInput}
        placeholder={"confirm password"}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={confPassword}
        onChangeText={setConfPassword}
      />
      <View style={styles.signUpButtonContainer}>
        <Pressable
          style={styles.signUpButton}
          android_ripple={{ color: "pink" }}
          onPress={handleRegister}
        >
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </Pressable>
      </View>
      <Pressable style={styles.logInButton} onPress={goToLogIn}>
        <Text style={styles.logInButtonText}>Log In</Text>
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
  signUpButtonContainer: {
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 30,
    elevation: 10,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: "white",
  },
  logInButton: {
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  logInButtonText: {
    color: Colors.primary,
  },
});
