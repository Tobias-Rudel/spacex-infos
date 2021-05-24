import React from "react";
import { render } from "@testing-library/react";
import Page from ".";

it("renders the Page component correctly", () => {
  const wrapper = render(<Page>The page content</Page>);

  expect(wrapper.getByText("The page content")).not.toBeNull();
});
