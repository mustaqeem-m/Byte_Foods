import { RestaurantCard } from "../RestaurantCard";
import MOCK_DATA from "../Mocks/MockCard.json";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RestaurantCard Component test suite", () => {
  it("Should render card name ", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();
  });
  it("Should render card cost", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const costString = screen.getByText("₹400 for two");
    expect(costString).toBeInTheDocument();
  });
});
