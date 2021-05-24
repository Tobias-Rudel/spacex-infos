import * as React from "react";
import { ILaunch } from "../../api/interfaces";

import Header from "../../components/Header";
import Headline from "../../components/Headline";
import Page from "../../components/Page";
import Table, { IColumn, IRow } from "../../components/Table";
import "./index.css";
import youtubeLogo from "../../assets/images/youtube_logo.svg";
import wikipediaLogo from "../../assets/images/wikipedia_logo.svg";

interface IFlightsProps {
  /* The launches data */
  launchesData: ILaunch[];
}

/**
 * Renders an application page containing a table about flight information.
 *
 * @param {*} props The component props.
 * @return {*} The flights page as react component.
 */
const Flights: React.FunctionComponent<IFlightsProps> = (props) => {
  const { launchesData } = props;

  /* Define the table columns */
  const columns: IColumn[] = [
    { key: "flight_number", title: "Flight number" },
    { key: "date", title: "Date", sortByKey: "date_utc" },
    { key: "success", title: "Successful" },
    { key: "name", title: "Name" },
    { key: "details", title: "Description", align: "left" },
    { key: "youtube", title: "YouTube" },
    { key: "wikipedia", title: "Wikipedia" },
  ];

  /* Define the table rows data */
  const rows: IRow[] = launchesData.map((item) => {
    /* Get success symbol */
    let success = "-";
    if (item.success === true) success = "✔";
    if (item.success === false) success = "✘";

    /* Get row data */
    const row: IRow = {
      key: `${item.flight_number.toString()}_${item.name}`,
      data: {
        flight_number: item.flight_number,
        date: new Date(item.date_utc).toLocaleDateString("en"),
        date_utc: item.date_utc,
        success,
        name: item.name,
        details: item.details,
        youtube: item.links?.youtube_id ? (
          <a
            href={`https://youtu.be/${item.links.youtube_id}`}
            target="_blank"
            rel="noreferrer"
          >
            <img alt="youtube" width="27" src={youtubeLogo} />
          </a>
        ) : undefined,
        wikipedia: item.links?.wikipedia ? (
          <a href={item.links.wikipedia} target="_blank" rel="noreferrer">
            <img alt="wikipedia" width="30" src={wikipediaLogo} />
          </a>
        ) : undefined,
      },
    };

    return row;
  });

  return (
    <Page>
      <Header />
      <Headline title="FLIGHTS" size="l" />
      <Headline title="Information about SpaceX flights" size="s" />
      <div className="tableContainer">
        <Table columns={columns} rows={rows} />
      </div>
    </Page>
  );
};

export default Flights;
