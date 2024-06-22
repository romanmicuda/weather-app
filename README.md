# Weather Application

This project is a weather application built using React and React Hooks.

## Getting Started

To get started with this project, follow the instructions below.

## Prerequisites

- Node.js: Download and install Node.js from [here](https://nodejs.org/en/).
- npm: npm comes with Node.js, so no need to install it separately.

## Installation

1. Clone the repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run the following command to install the necessary packages:

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

To learn more about React and Create React App, check out the following resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Building the Weather Application

Follow the steps below to build the weather application.

### Install Required Packages

To install the necessary packages, run the following commands:

```bash
npm install semantic-ui-react semantic-ui-css moment --save
```

### Set Up Environment Variables

1. Create a `.env` file in the root of your project.
2. Create an account in OpeanWeather https://openweathermap.org/api
3. Add the following environment variables to the `.env` file:

   ```env
   REACT_APP_API_URL='https://api.openweathermap.org/data/2.5'
   REACT_APP_API_KEY='your_api_key_here'
   REACT_APP_ICON_URL='https://openweathermap.org/img/w'
   ```
