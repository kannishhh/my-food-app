import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render the RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={{ info: MOCK_DATA }} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});
