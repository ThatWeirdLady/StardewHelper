import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FishCard from "./FishCard";
import { Provider } from "react-redux";
import { makeStore } from "../app/store";
import { toggleFish } from "../features/caught/caught-slice";

const dummyFish = {
  location: ["mountain"],
  name: "jester",
  season: ["Spring"],
  time: "Any",
  weather: "Sunny",
};

test("FishCard has information", async () => {
  const store = makeStore();
  render(
    <Provider store={store}>
      <FishCard fish={dummyFish} />
    </Provider>
  );

  const loc = screen.getByText(/Location: .*/i);
  expect(loc.innerHTML).toContain("mountain");

  const name = screen.getByText(/jester/i);
  expect(name.innerHTML).toContain("jester");

  const img = await screen.findByAltText(/catch jester/i);
  expect(img).toBeTruthy();

  fireEvent.click(img);

  expect(store.getState().fish.caught["jester"]).toBeTruthy();
});

test("Caught fish is hidden", async () => {
  const store = makeStore();
  store.dispatch(toggleFish(dummyFish.name));

  render(
    <Provider store={store}>
      <FishCard fish={dummyFish} />
    </Provider>
  );

  const names = screen.queryAllByText("jester");
  expect(store.getState().fish.caught["jester"]).toBeTruthy();
  expect(names.length).toBe(0);
});
