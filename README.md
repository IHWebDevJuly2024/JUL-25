# React router

## Installation

```bash
npm install react-router-dom
```

This library is used to create routes in a React application.
It provides us a few components that we can use to define routes in our application.

## Initial setup

To use the library, we need to wrap our application with the `HashRouter` or `BrowserRouter` component.

```jsx
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
      </div>
    </BrowserRouter>
  );
}
```
Remember that the `HashRouter` is used when we want to deploy to netlify (static sites) and the `BrowserRouter` is used when we have a server that can handle the routes (not our case).
But for the labs and lessons, since we are not deploying to netlify, we will use the `BrowserRouter`.

## Creating routes

To create routes, we use the `Route` component wrapped in the `Routes` component. The `Routes` component is used to group all the routes in our application. We are going to do this in the `App` component.

```jsx
// App.jsx
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
   
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
   
  );
}
```

For more information and advanced topics check today's lesson in the portal.
