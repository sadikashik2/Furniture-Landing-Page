import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ThemeContextProvider>
        <CartContextProvider>
          <div className=" dark:bg-stone-950 dark:text-white">
            <Navbar></Navbar>
            <main>
              <Outlet></Outlet>
            </main>
            <Footer></Footer>
          </div>
        </CartContextProvider>
              <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      </ThemeContextProvider>
    </>
  );
}

export default App;
