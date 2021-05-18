import React from "react";
import { act,render,screen} from "@testing-library/react";
import App from "./App"

global.fetch = jest.fn(()=>Promise.resolve({
  json: ()=>({
    icon_url:"http://image.png",
    value:"text"
  })
}))

describe("App",() => {
  it("loads the joke",async () => {
    await act(async ()=> render(<App/>))
  })
})