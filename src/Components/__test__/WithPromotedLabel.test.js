import { WithPromotedLabel } from "../RestaurantCard";
import { RestaurantCard } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATE from "../Mocks/MockCard.json"


describe("WithPromotedLabel Test suite", () => {
  it("Should render Promoted Label", () => {
    const PromotedCard = WithPromotedLabel(RestaurantCard);

    render(<PromotedCard resData={MOCK_DATE} />);

    const label = screen.getByText("Promoted");

    expect(label).toBeInTheDocument();
  });
});
