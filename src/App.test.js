import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        icon_url: "http://image.png",
        value: "Joke Test",
      }),
  })
);

describe("App", () => {
  it("loads the joke on mount", async () => {
    await act(async () => render(<App />));
    expect(screen.getByText("Joke Test")).toBeInTheDocument();
  });
});
