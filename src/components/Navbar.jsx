import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

// Navigation items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

// Reusable NavItems component
const NavItems = ({ toggleMenu }) => (
  <ul className="flex flex-col items-center md:flex-row md:space-x-8 gap-8">
    {navItems.map((item) => (
      <li key={item.path} onClick={toggleMenu}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "text-orange-500 font-bold"
              : "hover:text-orange-400 transition-colors"
          }
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {
    cartItems,
    addToCart,
    decreaseQty,
    removeFromCart,
    clearCart,
    itemCount,
    cartTotal,
  } = useContext(CartContext);

  const cartRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Navbar scroll background
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY >= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCheckout = () => {
    toast.success("Checkout successful!", { autoClose: 1500 });
    setShowCart(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ${
        isScroll
          ? "bg-white shadow-md dark:bg-stone-900 dark:text-white"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-screen container mx-auto flex justify-between items-center py-2 px-3 md:px-16">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="/logo2.png"
            alt="Logo"
            className={`w-14 max-[520px]:w-10 ${
              isScroll ? "dark:bg-white rounded-full" : "bg-white rounded-full"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavItems />
        </div>

        {/* Cart + Theme */}
        <div className="flex items-center gap-4 md:gap-6 relative" ref={cartRef}>
          {/* Cart Icon */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <FaBagShopping className="text-xl md:text-xl" />
            {itemCount > 0 && (
              <sup className="absolute -top-2 -right-3 bg-orange-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {itemCount}
              </sup>
            )}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-black/70 dark:bg-white/60 hover:scale-105 transition-all cursor-pointer max-[400px]:p-1"
          >
            {isDarkMode ? (
              <PiSunFill className="text-amber-400 text-sm sm:text-base" />
            ) : (
              <BsMoonStarsFill className="text-white text-sm sm:text-base" />
            )}
          </button>

          {/* Mobile Hamburger */}
          <div
            className="md:hidden text-xl cursor-pointer hover:text-orange-400"
            onClick={toggleMenu}
          >
            <FaBars />
          </div>

          {/* Mobile Menu Slider */}
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black/90 text-white flex flex-col items-center justify-center space-y-8 transition-transform transform z-50 md:hidden ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            
            <div
              className="absolute top-6 right-6 text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              <FaTimes />
            </div>
            <NavItems toggleMenu={toggleMenu} />
          </div>

          {/* Cart Dropdown */}
          {showCart && (
            <div
              className={`absolute right-0 top-full mt-2 sm:mt-3 
                w-[90vw] sm:w-80 max-h-[300px] overflow-auto border shadow-lg rounded-lg p-3 sm:p-4
                ${isDarkMode ? "bg-stone-800 border-stone-700 text-white" : "bg-white border-gray-300 text-gray-800"}
                z-50
              `}
            >
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-300">
                  No items in cart
                </p>
              ) : (
                <>
                  <ul className="space-y-3">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className={`flex justify-between items-start gap-3 border-b pb-2 ${
                          isDarkMode ? "border-stone-700" : "border-gray-300"
                        }`}
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm truncate">{item.name}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            ${item.price} each
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <button
                              onClick={() => decreaseQty(item.id)}
                              className={`px-2 py-1 rounded text-sm cursor-pointer ${
                                isDarkMode ? "bg-stone-700 text-white" : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              −
                            </button>
                            <span className="text-sm px-1">{item.qty}</span>
                            <button
                              onClick={() => addToCart(item)}
                              className={`px-2 py-1 rounded text-sm cursor-pointer ${
                                isDarkMode ? "bg-stone-700 text-white" : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="font-semibold text-sm">
                            ${(item.price * item.qty).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 text-xs hover:underline cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-3 border-t flex items-center justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">${cartTotal.toFixed(2)}</span>
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={handleCheckout}
                      className="flex-1 bg-orange-400 text-white py-2 rounded hover:bg-orange-500 transition cursor-pointer"
                    >
                      Checkout
                    </button>
                    <button
                      onClick={() => {
                        clearCart();
                        toast.info("Cart cleared!", { autoClose: 1500 });
                      }}
                      className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition cursor-pointer"
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
