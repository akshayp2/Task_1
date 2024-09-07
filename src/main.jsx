import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Services from "./component/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "home",
        element: <Home />, 
      },
      {
        path: "about",
        element: <About />, 
      },
      {
        path: "contact",
        element: <Contact />, 
      },
      {
        path: "services",
        element: <Services />, 
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
