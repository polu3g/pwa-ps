# React Redux Async API Project

## Project Structure
```
react-redux-api-project/
│-- public/               # Static assets
│-- src/
│   │-- components/       # React components
│   │-- store/            # Redux store setup
│   │   │-- actions.js    # Redux actions
│   │   │-- reducers.js   # Redux reducers
│   │   │-- store.js      # Redux store configuration
│   │-- App.js            # Main application component
│   │-- index.js          # Entry point
│-- .babelrc              # Babel configuration
│-- .eslintrc.js          # ESLint configuration
│-- package.json          # Dependencies and scripts
│-- webpack.config.js     # Webpack configuration
│-- README.md             # Project documentation
```

---

## Getting Started

### 1️⃣ Install Dependencies
```sh
npm install
```

### 2️⃣ Run the Project in Development Mode
```sh
npm start
```
This will start the Webpack Dev Server at `http://localhost:8080/`.

---

## Running in Production Mode

### 1️⃣ Build for Production
```sh
npm run build
```
This will generate a `dist/` folder with the optimized production build.

### 2️⃣ Serve with PM2
PM2 is used to manage the production process.

#### Install PM2 Globally (if not installed):
```sh
npm install -g pm2
```

#### Start the App with PM2:
```sh
pm run build
pm install -g serve
pm start:prod
```
Or, manually start with PM2:
```sh
pm run build
pm install -g serve
pm2 start "serve -s dist -l 8080" --name react-redux-app
```

#### Monitor and Manage the Process:
```sh
pm2 list          # Show running apps
pm2 logs          # View logs
pm2 restart all   # Restart all apps
pm2 stop all      # Stop all apps
pm2 delete all    # Remove all apps
```

---

## API Integration
This project fetches data from `https://jsonplaceholder.typicode.com/todos/1` asynchronously using Redux and Middleware.

### 1️⃣ Redux Middleware Installed:
- `redux-axios-middleware`
- `redux-promise-middleware`

### 2️⃣ Redux Async Flow:
- **Action Dispatches API Call** →
- **Middleware Handles the Request** →
- **Reducer Updates the Store Asynchronously**

Example API action (`store/actions.js`):
```js
import axios from 'axios';

export const FETCH_TODO = 'FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';

export const fetchTodo = () => {
  return {
    type: FETCH_TODO,
    payload: axios.get('https://jsonplaceholder.typicode.com/todos/1')
  };
};
```

---

## Technologies Used
- **React 18**
- **Redux** for state management
- **Redux-Axios-Middleware** for API calls
- **Redux-Promise-Middleware** for handling async actions
- **Webpack** for bundling
- **PM2** for production process management

---

## Contributors
Feel free to contribute! Fork the repo, make your changes, and submit a PR. 🚀

