## Stock market database management system
Is a Desktop application built with Electron and SQLite3. The database is stored locally, there are 500 companies in total that you can paper trade on. The app will call an API once a day to get the prices of the stocks; that's the only time the app will use the internet.

## Install the Application
Download the executable from releases for your platform.

## Project Details
The tech that the app uses:

Electron.jsto compile for the desktops

SQLlite3 as database interfacing with sql.jsmodule

React with CDN for the UI and Bulma CSS for the components and style.

## Project Folder Structure
Folder playground and data_resource are not required for the running of the application and are in the .gitignore. The basic files needed for Electron:

main.js

preload.js

index.html

The backend directory holds all the API functions that are used in the frontend to interact with the SQLite DB. This folder also contains the sqlite database file.

## Run the Application
Clone the GitHub repository:

bash
git clone https://github.com/ambhuvan/stock_market_database_management_system.git
Navigate to the project directory:

bash
cd stock_market_database_management_system
Install the necessary dependencies:

bash
npm install
Start the application:

bash
npm run start
should run the electron start script and the app should be running



