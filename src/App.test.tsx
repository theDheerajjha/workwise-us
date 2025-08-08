import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Post a Job button", () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /Post a Job/i });
  expect(buttonElement).toBeInTheDocument();
});
