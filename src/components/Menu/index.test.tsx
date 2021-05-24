import React from "react";
import { render } from "@testing-library/react";
import Menu from ".";

it("renders the Menu component correctly", () => {
  const wrapper = render(
    <Menu menuItems={[{ id: 1, title: "Menu Item 1", link: "Link 1" }]} />
  );

  expect(wrapper.container.querySelector("a[href='Link 1'")).not.toBeNull();
  expect(wrapper.getByText("Menu Item 1")).not.toBeNull();
});
