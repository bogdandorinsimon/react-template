import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { App } from ".";

describe("App", () => {
  it("renders App", () => {
    render(<App />);

    screen.debug();
  });
});
