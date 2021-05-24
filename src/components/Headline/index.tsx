import * as React from "react";

interface IHeadlineProps {
  /** The size of the headline. */
  size: "s" | "m" | "l";
  /** The title of the headline. */
  title: string;
}

/**
 * Renders a headline in a given size.
 *
 * @param {*} props The component props.
 * @return {*} The headline as react component.
 */
const Headline: React.FunctionComponent<IHeadlineProps> = (props) => {
  const { size, title } = props;

  switch (size) {
    case "l":
      return <h1>{title}</h1>;
    case "m":
      return <h2>{title}</h2>;
    case "s":
      return <h3>{title}</h3>;
  }
};

export default Headline;
