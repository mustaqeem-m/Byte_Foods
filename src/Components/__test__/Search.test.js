import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA from "../Mocks/mockBodysResList.json";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

test("Should render filtered cards after search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  expect(screen.getAllByTestId("resCard").length).toBe(20);

  const input = screen.getByPlaceholderText("Enter Key Word to search:");
  fireEvent.change(input, { target: { value: "burger" } });

  const searchBtn = screen.getByRole("button", { name: /search/i });
  fireEvent.click(searchBtn);

  await waitFor(() => {
    expect(screen.getAllByTestId("resCard").length).toBe(3);
  });
});

test("Should render the top rated restaurant", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  expect(screen.getAllByTestId("resCard").length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top rated restaurents!",
  });
  fireEvent.click(topRatedBtn);

  await waitFor(() => {
    expect(screen.getAllByTestId("resCard").length).toBe(13);
  });
});
