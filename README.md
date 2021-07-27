# commit-viewer

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/fe6d3e63528e40c0acc5d1c62041146c)](https://www.codacy.com/gh/filipe7rito/commit-viewer/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=filipe7rito/commit-viewer&amp;utm_campaign=Badge_Grade) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/fe6d3e63528e40c0acc5d1c62041146c)](https://www.codacy.com/gh/filipe7rito/commit-viewer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=filipe7rito/commit-viewer&utm_campaign=Badge_Coverage)

## Demo

[https://commits-viewer.herokuapp.com/](https://blooming-waters-26703.herokuapp.com/)

## Requirements

For development, you will only need Node.js installed on your environement.

#### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

Suggested versions: 

    $ node --version
    v12.x.x

    $ npm --version
    7.x.x

### Initial setup

In order to install project dependencies you need to execute the following command:
### `npm i`

<br>

## Docker mode

### `docker-compose up`

Builds a docker image genarating a production build and raises a container with the respective image .<br>
The container will serve the application on [http://localhost:8080](http://localhost:8080).

<br>

## Available Scripts

In the project directory, you can run the following scrips:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload trying to preserve the state due to react-refresh and Hot module reload.<br>

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm test:watch`

Launches the test runner in the interactive watch mode.<br>

### `npm test:coverage`

Shows the project test coverage.<br>
Append `:open` after it will show as an HTML page

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified<br>
Your app is ready to be deployed!

### `npm run start`

Runs the app in the production mode.<br>
Express server will serve a production build on [http://localhost:8080](http://localhost:8080).


## Tech Stack

This challenge was developed on top of the following technologies:

- [Webpack](https://webpack.js.org/) for bundling
- [Babel](https://babeljs.io/) for compiling
- [React](https://reactjs.org/) for creating UI components
- [TypeScript](https://www.typescriptlang.org/) for static typing
- [bootstrap](https://getbootstrap.com/) UI components framework
- [Eslint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for formatting
- [Jest](https://jestjs.io/) for testing
- [react-testing-library](https://github.com/kentcdodds/react-testing-library) for React testing
- [Emotion](https://emotion.sh/) for component styling


