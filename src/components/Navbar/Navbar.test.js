import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders the logo and navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByAltText("planet")).toBeInTheDocument();
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText(/Rockets/i)).toBeInTheDocument();
    expect(screen.getByText(/Missions/i)).toBeInTheDocument();
    expect(screen.getByText(/My Profile/i)).toBeInTheDocument();
  });
});
