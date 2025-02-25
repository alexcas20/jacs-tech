import { NavLink, useNavigate } from "react-router-dom";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import logo from "../../assets/logo/logo-jacs.png";

export const ResponsiveAppBar = () => {
  // navigate to cart
  const navigate = useNavigate();

  // total items cart
  const items = useSelector((state) => state.cart.items);

  // Pages
  const pages = ["home", "products", "favs"];

  // mobile appbar
  const [isOpen, setIsOpen] = useState(false);

  // navigate to cart mobile nav
  const handleNavigate = () => {
    navigate("/cart");
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-slate-900 text-slate-50 sticky top-0 z-10 md:mt-2 md:mb-4 md:rounded-2xl md:w-[96%] md:mx-auto lg:w-[95%] 2xl:w-[80%]">
      <nav className="px-4 py-6 md:py-7 md:flex md:justify-around relative">
        <div className="flex justify-between items-center ">
          {/*  Logo */}
          <div className="w-[110px] lg:w-[180px] md:w-[120px] h-12 md:h-14 md:absolute md:left-3 md:bottom-10 lg:h-20 lg:bottom-1/4 lg:left-10">
            <img
              src={logo}
              alt="logo jacs tech"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>

          <button
            className="md:hidden border border-slate-50 p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8" />
            ) : (
              <Bars3Icon className="w-8" />
            )}
          </button>
        </div>

        {/* Desktop Bar */}
        <div className="hidden md:flex md:items-center">
          <ul className="cursor-pointer flex gap-8">
            {pages.map((page, i) => (
              <li
                className="text-slate-400 text-lg capitalize transition-all hover:text-slate-200 hover:scale-110 "
                key={i}
              >
                <NavLink
                  to={`/${page}`}
                  className={({ isActive }) =>
                    isActive ? "text-slate-50" : "text-[15px]"
                  }
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <ul className="cursor-pointer pb-6 flex flex-col items-center gap-2 md:hidden">
            {pages.map((page, i) => (
              <li
                className="text-slate-400 capitalize transition-all hover:text-slate-200 hover:scale-110 "
                key={i}
              >
                <NavLink
                  to={`/${page}`}
                  className={({ isActive }) =>
                    isActive ? "text-slate-50" : "text-[15px]"
                  }
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

        {/* Action buttons */}
        <div
          className={`${
            isOpen
              ? "flex justify-center gap-4 "
              : "hidden md:flex md:gap-4 md:justify-center md:items-center"
          }`}
        >
          <button className="border border-slate-100 py-2 px-4 rounded-md text-slate-50 transition-colors hover:bg-slate-600 flex gap-2 items-center"
          
          onClick={() => navigate("/login")}>
            <UserIcon className="w-4" />
            Login
          </button>
          <button
            className="border border-slate-100 py-2 px-4 rounded-md text-slate-50 transition-colors hover:bg-slate-600 flex items-center gap-2"
            onClick={handleNavigate}
          >
            <ShoppingCartIcon className="w-4" />
            Cart ({items.length})
          </button>
        </div>
      </nav>
    </header>
  );
};
