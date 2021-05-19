import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("loads the joke on mount", async () => {
    global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          icon_url: "http://image.png",
          value: "Joke Test",
        }),
    })
  );
    await act(async () => render(<App />));
    expect(screen.getByText("Joke Test")).toBeInTheDocument();
  });
});
