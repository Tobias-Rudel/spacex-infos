import * as React from "react";

import "./index.css";

/**
 * Renders a wrapper for an application page.
 *
 * @param {*} props The component props.
 * @return {*} The page wrapper as react component.
 */
const Page: React.FunctionComponent = (props) => {
  return <div className="pageContainer">{props.children}</div>;
};

export default Page;
