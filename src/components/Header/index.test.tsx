import React from "react";
import { render } from "@testing-library/react";
import Header from ".";

it("renders the Header component correctly", () => {
  const wrapper = render(<Header />);

  expect(wrapper.container.querySelector("header")).not.toBeNull();
  expect(wrapper.container.querySelector("img[alt='SpaceX'")).not.toBeNull();
  expect(wrapper.container.querySelector("ul")).not.toBeNull();
  expect(wrapper.getByText("SpaceX INFORMATION SYSTEM")).not.toBeNull();
});
