import { Provider } from "react-redux";
import { Header } from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Suite", () => {
  it("Should render header", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const HomeLink = screen.getByText("Home");

    expect(HomeLink).toBeInTheDocument();
  });

  it("Should render Cart (0-Items) Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const Cart = screen.getByText("Cart (0-Items)");

    expect(Cart).toBeInTheDocument();
  });

  it("Should render Cart button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const HomeLink = screen.getByText(/Cart/);

    expect(HomeLink).toBeInTheDocument();
  });

  it("Should render login logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByText("Login");

    expect(loginBtn).toBeInTheDocument();

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByText("Logout");

    expect(logoutBtn).toBeInTheDocument();
  });
});
