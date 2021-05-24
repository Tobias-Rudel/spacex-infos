import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {
  loadCapsulesData,
  loadCrewData,
  loadLaunchesData,
  loadPayloadData,
} from "./api";
import { ICapsule, ICrew, ILaunch, IPayload } from "./api/interfaces";
import Flights from "./containers/Flights";
import Statistics from "./containers/Statistics";

/**
 * Gets data from api and renders the application using react router to different routes.
 *
 * @return {*} The application as react component.
 */
const App: React.FunctionComponent = () => {
  /* React hooks for setting the retrieved data */
  const [launchesData, setLaunchesData] = useState([] as ILaunch[]);
  const [crewData, setCrewData] = useState([] as ICrew[]);
  const [payloadData, setPayloadData] = useState([] as IPayload[]);
  const [capsulesData, setCapsulesData] = useState([] as ICapsule[]);

  /* React hooks for loading the data */
  useEffect(() => {
    loadLaunchesData().then((data: ILaunch[]) => setLaunchesData(data));
  }, []);

  useEffect(() => {
    loadCrewData().then((data: ICrew[]) => setCrewData(data));
  }, []);

  useEffect(() => {
    loadPayloadData().then((data: IPayload[]) => setPayloadData(data));
  }, []);

  useEffect(() => {
    loadCapsulesData().then((data: ICapsule[]) => setCapsulesData(data));
  }, []);

  /* Render the app */
  return (
    <BrowserRouter>
      <Route
        path={["/", "/statistics"]}
        exact={true}
        render={() => (
          <Statistics
            launchesData={launchesData}
            crewData={crewData}
            payloadData={payloadData}
            capsulesData={capsulesData}
          />
        )}
      />
      <Route
        path="/flights"
        exact={true}
        render={() => <Flights launchesData={launchesData} />}
      />
    </BrowserRouter>
  );
};

export default App;
