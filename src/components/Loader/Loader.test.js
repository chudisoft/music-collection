import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders the loading message", () => {
    render(
      <MemoryRouter>
        <Loader />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
