import React from "react";
import { render } from "@testing-library/react";
import Headline from ".";

it("renders the Headline component correctly", () => {
  const wrapper = render(<Headline size="l" title="The Headline" />);

  expect(wrapper.container.querySelector("h1")).not.toBeNull();
  expect(wrapper.getByText("The Headline")).not.toBeNull();
});
