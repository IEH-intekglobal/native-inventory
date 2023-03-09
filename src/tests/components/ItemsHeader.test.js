import { render } from "@testing-library/react-native";
import { waitFor } from "@testing-library/react";
import { ItemsHeader } from "../../components/ItemsHeader";
//import { getItems } from "../../db/firestore/db";

jest.mock("../../db/firestore/db", () => ({
  getItems: () =>
    new Promise((res, rej) => {
      res([]);
    }),
}));

test("renders correctly", async () => {
  const { getByTestId } = render(<ItemsHeader />);

  const header = await waitFor(() => getByTestId("items-header"));
});
