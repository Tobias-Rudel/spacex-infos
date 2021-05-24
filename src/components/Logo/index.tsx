import * as React from "react";

import logo from "../../assets/images/spacex-logo.svg";
import "./index.css";

/**
 * Renders the application logo and subtitle with a link to the main page.
 *
 * @return {*} The logo as react component.
 */
const Logo: React.FunctionComponent = () => {
  return (
    <div className="logoContainer">
      <a href="/">
        <img src={logo} alt="SpaceX" />
      </a>
      <div className="logoText">
        <a href="/">SpaceX INFORMATION SYSTEM</a>
      </div>
    </div>
  );
};

export default Logo;
