import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";
import { DashboardCard } from "../../components/DashboardCard";

jest.mock("@expo/vector-icons/Ionicons", () => "");

test("renders correctly", async () => {
  render(
    <DashboardCard icon="add" title="Test">
      <Text>children</Text>
    </DashboardCard>
  );

  await screen.findByText("children");
  expect(screen.getByText("children")).toBeVisible();
});
