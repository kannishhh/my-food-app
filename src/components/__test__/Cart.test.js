import { render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
// import MOCK_DATA from "../mocks/mockResMenu.json"


it("should load Restaurant Menu component", async () => {
  render(<RestaurantMenu />);
});
