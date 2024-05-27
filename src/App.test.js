import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App"; // Assuming App.js contains the provided JSX code

describe("App Component", () => {
  test("renders User Management header", () => {
    render(<App />);
    const headerElement = screen.getByText("User Management");
    expect(headerElement).toBeInTheDocument();
  });
});
