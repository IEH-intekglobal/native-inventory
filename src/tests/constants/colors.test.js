import { Colors } from "../../constants/colors";

test("Colors constant contains primary and softGray", () => {
  const primary = Colors.primary;
  const softGray = Colors.softGray;

  expect(primary).toBeTruthy();
  expect(softGray).toBeTruthy();
});
