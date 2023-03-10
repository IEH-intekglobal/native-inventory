import { Alert } from "react-native";
import { fireEvent, render, screen } from "@testing-library/react-native";

import SignUp from "../../screens/SignUp";
import { SetterContext } from "../../state/context";
//import { registerUser } from "../../auth/firestore";

jest.mock("../../auth/firestore", () => ({
  registerUser: () =>
    new Promise((res, rej) =>
      res({ stsTokenManager: { accessToken: "token" } })
    ),
}));

describe("Tests for the Sign Up screen", () => {
  test("Confirmation password does not equal password", async () => {
    jest.spyOn(Alert, "alert");
    const setUserToken = jest.fn();
    render(
      <SetterContext.Provider value={{ setUserToken }}>
        <SignUp />
      </SetterContext.Provider>
    );

    const emailContainer = screen.queryByPlaceholderText("email");
    const passwordContainer = screen.queryByPlaceholderText("password");
    const confirmationPasswordContainer =
      screen.queryByPlaceholderText("confirm password");
    fireEvent.changeText(emailContainer, "test@test.com");
    fireEvent.changeText(passwordContainer, "password");
    fireEvent.changeText(confirmationPasswordContainer, "password2");

    const signUpButton = screen.queryByText("Sign up");
    fireEvent.press(signUpButton);

    expect(Alert.alert).toHaveBeenCalledWith(
      "Invalid data",
      "The password and the confirmation password must be the same"
    );
  });
  test("Confirmation password equals password", () => {
    const setUserToken = jest.fn();
    render(
      <SetterContext.Provider value={{ setUserToken }}>
        <SignUp />
      </SetterContext.Provider>
    );

    const emailContainer = screen.queryByPlaceholderText("email");
    const passwordContainer = screen.queryByPlaceholderText("password");
    const confirmationPasswordContainer =
      screen.queryByPlaceholderText("confirm password");
    fireEvent.changeText(emailContainer, "test@test.com");
    fireEvent.changeText(passwordContainer, "password");
    fireEvent.changeText(confirmationPasswordContainer, "password");

    const signUpButton = screen.queryByText("Sign up");
    fireEvent.press(signUpButton);
  });
});
