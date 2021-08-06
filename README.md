# QBE Code Test - Shopping Basket - M.Perceval

Hello all.  Here is my attempt to convince you all that I can write code.  Its a two-parter - some backend Express code and some front end React.

**NB: Requires Node 14 or above.**

The backend has two endpoints :

- `/products` (GET) : Returns all products.
- `/calc-sales-tax` (POST) : Returns products (specified by their ids in the request body) with calculated tax and total cost per product.

Some unit tests have been included but controller tests are omitted due to time constraints.

The front end is a hooks-based React application.  It initially calls the `/products` api call and displays all products on the screen.

There's currently no option to select specific products - instead it is assumed that one of each product is in the shopping basket.

When the `Calculate Tax` button is pressed, the `/calc-sales-tax` call is made and the basket is updated with the tax and totals returned from the call.

Again - we're a little light on unit tests on the front end - well actually there aren't any.  This is due to 'young children on summer holidays'-related time constraints.

I hope this project gives you an idea of my coding style.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Run `npm install` to install dependancies.

## How to run front end

In the project directory, run

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to run back end

Open another terminal window in the project directory and run

### `npm run server`

This will start the Express backend.

## Unit tests

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run server`

Runs the backend of the Shopping Basket application.
