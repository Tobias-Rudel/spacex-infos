import React from "react";
import { render } from "@testing-library/react";
import Table from ".";

it("renders the Table component correctly", () => {
  const columns = [
    { key: "col1", title: "Column 1" },
    { key: "col2", title: "Column 2" },
  ];
  const rows = [{ key: "1", data: { col1: "Value Column 1" } }];
  const wrapper = render(<Table columns={columns} rows={rows} />);

  expect(wrapper.container.getElementsByTagName("th")).toHaveLength(2);
  expect(wrapper.container.getElementsByTagName("td")).toHaveLength(2);
  expect(wrapper.container.getElementsByTagName("tr")).toHaveLength(2);
  expect(wrapper.getByText("Column 1 ⇧")).not.toBeNull();
  expect(wrapper.getByText("Column 2")).not.toBeNull();
  expect(wrapper.getByText("Value Column 1")).not.toBeNull();
});
