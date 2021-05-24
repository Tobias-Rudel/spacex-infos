import React from "react";
import { render } from "@testing-library/react";
import Logo from ".";

it("renders the Logo component correctly", () => {
  const wrapper = render(<Logo />);

  expect(wrapper.container.querySelector("a[href='/'")).not.toBeNull();
  expect(wrapper.container.querySelector("img")).not.toBeNull();
  expect(wrapper.getByText("SpaceX INFORMATION SYSTEM")).not.toBeNull();
});
