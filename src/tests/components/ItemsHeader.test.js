import { render, screen } from "@testing-library/react-native";
import { ItemsHeader } from "../../components/ItemsHeader";
//import { getItems } from "../../db/firestore/db";

jest.mock("../../db/firestore/db", () => ({
  getItems: () =>
    new Promise((res, rej) => {
      res([]);
    }),
}));

test("renders correctly", async () => {
  render(<ItemsHeader />);
  await screen.findByText("Folders");
  expect(screen.getByText("Folders")).toBeVisible();

  const info = await screen.findAllByText("0");
  expect(info.length > 0).toBe(true);
});
