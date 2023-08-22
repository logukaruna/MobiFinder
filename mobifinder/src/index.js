import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import Compare from './Components/Compare';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
const route = createBrowserRouter([
  {
    path: "home",
    element: <App />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "compare",
    element: <Compare/>,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
