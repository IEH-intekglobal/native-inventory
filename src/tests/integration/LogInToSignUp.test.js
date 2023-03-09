import { fireEvent, render, screen } from "@testing-library/react-native";
import App from "../../../App";

jest.mock("../../auth/firestore", () => {});
jest.mock("../../db/firestore/db", () => {});
jest.mock("@rneui/themed", () => {});

test("goes from log in to sign up and back", () => {
  const { queryByText } = render(<App />);

  const goToSignUpButton = screen.getByText("Register");
  let signUpElement = queryByText("Sign Up");
  let logInElements = screen.getAllByText("Log In");

  expect(signUpElement).toBeFalsy();
  expect(logInElements[0]).toBeVisible();
  fireEvent.press(goToSignUpButton);

  signUpElement = queryByText("Sign Up");
  expect(signUpElement).toBeVisible();

  logInElements = screen.getAllByText("Log In");
  fireEvent.press(logInElements[2]);

  logInElements = screen.getAllByText("Log In");
  expect(logInElements[0]).toBeVisible();

  signUpElement = queryByText("Sign Up");
  expect(signUpElement).toBeFalsy();
});
