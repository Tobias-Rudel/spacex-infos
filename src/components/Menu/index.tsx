import * as React from "react";

import "./index.css";

interface IMenuProps {
  /* The menu items with title and link */
  menuItems: { id: number; title: string; link: string }[];
}

/**
 * Renders the application menu.
 *
 * @param {*} props The component props.
 * @return {*} The menu as react component.
 */
const Menu: React.FunctionComponent<IMenuProps> = (props) => {
  const { menuItems } = props;

  return (
    <ul className="menu">
      {
        /* Loop menu items */
        menuItems.map((menuItem) => {
          return (
            <li key={menuItem.id}>
              <a href={menuItem.link}>{menuItem.title}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Menu;
