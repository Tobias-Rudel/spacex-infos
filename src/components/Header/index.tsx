import * as React from "react";

import Logo from "../Logo";
import Menu from "../Menu";
import "./index.css";

/**
 * Renders the application header.
 *
 * @return {*} The application header as react component.
 */
const Header: React.FunctionComponent = () => {
  const menuItems = [
    { id: 1, title: "STATISTICS", link: "/statistics" },
    { id: 2, title: "FLIGHTS", link: "/flights" },
  ];

  return (
    <header className="headerContainer">
      <Logo />
      <Menu menuItems={menuItems} />
    </header>
  );
};

export default Header;
