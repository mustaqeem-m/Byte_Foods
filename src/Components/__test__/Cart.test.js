import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import MOCK_DATA from "../Mocks/MockResMenu.json";
import { Header } from "../Header.js";
import appStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Cart from "../Cart.js";
import { deleteCart } from "../../utils/Slices/CartSlice";

// ✅ Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Add items to cart flow test", () => {
  beforeEach(() => {
    appStore.dispatch(deleteCart()); // Ensure a clean cart before each test
  });

  it("Should add item to cart", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordionHeader = await screen.findByText("Non Veg Pizza(11)");
    fireEvent.click(accordionHeader);

    await waitFor(() => {
      const items = screen.getAllByTestId("foodItems");
      expect(items.length).toBe(11);
    });

    const addButtons = screen.getAllByText("ADD");
    fireEvent.click(addButtons[0]);

    expect(appStore.getState().cart.items.length).toBe(1);
    expect(screen.getByText("Cart (1-Items)")).toBeInTheDocument();
  });

  it("Should render 2 cart items in the header", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordionHeader = await screen.findByText("Non Veg Pizza(11)");
    fireEvent.click(accordionHeader);

    const addButtons = await screen.findAllByText("ADD");
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[1]);

    expect(appStore.getState().cart.items.length).toBe(2);
    expect(screen.getByText("Cart (2-Items)")).toBeInTheDocument();
  });

  it("Should render Cart component and show number of items", async () => {
    await act(async () => {
      render(
        <Provider store={appStore}>
          <BrowserRouter>
            <Header />
            <RestaurantMenu />
            <Cart />
          </BrowserRouter>
        </Provider>
      );
    });

    const accordionHeader = await screen.findByText("Non Veg Pizza(11)");
    fireEvent.click(accordionHeader);

    await waitFor(() => {
      const addButtons = screen.getAllByText("ADD");
      fireEvent.click(addButtons[0]);
      fireEvent.click(addButtons[1]);
    });

    const cartItems = screen.getAllByTestId("foodItems");
    expect(cartItems.length).toBe(13);
  });
});
