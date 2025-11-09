import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>
);
