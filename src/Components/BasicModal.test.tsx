import React from "react";
import { Modal } from "@mui/material";
import { BasicModal } from "./BasicModal";
import { fireEvent, render, screen } from "@testing-library/react";
import { makeStore } from "../app/store";
import { Provider } from "react-redux";

test("Modal is closed by default", async () => {
  const store = makeStore();
  render(
    <Provider store={store}>
      <BasicModal />
    </Provider>
  );

  expect(screen.queryAllByAltText(/Pufferfish icon/i).length).toBe(0);
});

test("Click Collection Button Opens Modal", async () => {
  const store = makeStore();
  render(
    <Provider store={store}>
      <BasicModal />
    </Provider>
  );
  const collButton = screen.getByText(/Collection/i);
  fireEvent.click(collButton);
  expect(screen.queryAllByAltText(/Pufferfish icon/i).length).toBe(1);
});

test("Modal Closes When Collection Button is clicked", async () => {
  const store = makeStore();

  const r = render(
    <Provider store={store}>
      <BasicModal />
    </Provider>
  );
  const collButton = screen.getByText(/Collection/i);
  fireEvent.dblClick(collButton);

  console.log("Collection Button Clicked Closed");
  console.log(screen.queryAllByAltText(/Pufferfish icon/i).length);
  expect(screen.queryAllByAltText(/Pufferfish icon/i).length).toBe(0);
});
