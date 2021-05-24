# SpaceX Information System

## About

This is a small demo project getting data via [SpaceX api](https://github.com/r-spacex/SpaceX-API/tree/master/docs/v4) and displaying it in a web browser.

It consits out of two pages. The first shows various statistics about SpaceX flights. The second displays a sortable table with detailed information about all SpaceX launches.

## Technical Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and **TypeScript** template.

### Folder Structure

    .
    ├── node_modules            # The used node modules of this project.
    ├── public                  # The entry html page.
    └── src                     # All application source codes written in TypeScript.
        ├── api                 # API Functions and Interfaces.
        ├── assets              # All Images and Fonts.
        ├── components          # Reusable React Components.
        └── containers          # The application pages using the components.

### Used External Modules

Besides **react** and **react-dom** which were already installed by create-react-app this project uses the following additional node modules:

- **react-router-dom** for handling the site navigation.
- **animated-number-react** for displaying numbers with a counter effect.
- **ramda** function library for more efficient data handling in development.

## Available Scripts

You will need npm to be installed on your local computer in order to run the application. Then in the project directory, you can run:

### `npm install`

Installs the application by getting all needed node modules.

### `npm start`

Runs the application in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the application for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
