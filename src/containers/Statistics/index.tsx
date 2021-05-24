import React from "react";
import { filter, pluck, propEq, sum } from "ramda";
import AnimatedNumber from "animated-number-react";

import Header from "../../components/Header";
import Headline from "../../components/Headline";
import Page from "../../components/Page";
import { ICapsule, ICrew, ILaunch, IPayload } from "../../api/interfaces";
import "./index.css";

interface IStatisticsProps {
  /** The launches data from api. */
  launchesData: ILaunch[];
  /** The crew data from api. */
  crewData: ICrew[];
  /** The payload data from api. */
  payloadData: IPayload[];
  /** The capsules data from api. */
  capsulesData: ICapsule[];
}

/**
 * Renders an application page containing number counters about various flights data.
 *
 * @param {*} props The component props.
 * @return {*} The statistics page as react component.
 */
const Statistics: React.FunctionComponent<IStatisticsProps> = (props) => {
  const { launchesData, crewData, payloadData, capsulesData } = props;

  /* Get the sum of payload tons */
  const payloadTons = sum(pluck("mass_kg", payloadData)) / 1000;

  /* Get the sum of capsules reuse */
  const capsulesReuse = sum(pluck("reuse_count", capsulesData));

  /* Define statistics data */
  const statistics = [
    { id: 1, title: "TOTAL FLIGHTS", value: launchesData.length },
    {
      id: 2,
      title: "SUCCESSFUL FLIGHTS",
      value: filter(propEq("success", true), launchesData).length,
    },
    {
      id: 3,
      title: "CREW MEMBERS",
      value: crewData.length,
    },
    {
      id: 4,
      title: "TONS OF PAYLOAD",
      value: payloadTons,
    },
    {
      id: 5,
      title: "REUSED CAPSULES",
      value: capsulesReuse,
    },
  ];

  return (
    <Page>
      <Header />
      <Headline title="STATISTICS" size="l" />
      <Headline title="Statistics about SpaceX flights" size="s" />

      <div className="statisticsContainer">
        {
          /* Loop the statistics data */
          statistics.map((item) => (
            <div key={item.id} className="statisticsItem">
              <AnimatedNumber
                value={item.value}
                formatValue={(value: number) => value.toFixed(0)}
                className="number"
              />
              <div className="label">{item.title}</div>
            </div>
          ))
        }
      </div>
    </Page>
  );
};

export default Statistics;
