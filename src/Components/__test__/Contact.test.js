import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page Test suite", () => {
  it("Should render ", () => {
    render(<Contact />); // Inorder to test the Component we need to render thr component

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should render button ", () => {
    // step-1 : Render
    render(<Contact />);
    // step-2 Querying
    const btn = screen.getByRole("button");
    console.log(btn);
    // step-3 : Checking
    expect(btn).toBeInTheDocument();
  });

  it("Should render input boxes", () => {
    render(<Contact />);

    const inpBoxes = screen.getAllByRole("textbox");
    console.log(inpBoxes.length);

    expect(inpBoxes.length).toBe(2);
  });

  it("Should render component text", () => {
    render(<Contact />);

    const text = screen.getByPlaceholderText("Leave Your Message here!");

    expect(text).toBeInTheDocument();
  });
});
