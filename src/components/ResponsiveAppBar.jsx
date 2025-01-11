import { NavLink, useNavigate } from "react-router-dom";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export const ResponsiveAppBar = () => {
  // navigate to cart
  const navigate = useNavigate();

  // total items cart
  const items = useSelector((state) => state.cart.items);

  // Pages
  const pages = ["home", "products", "favs"];
  return (
    <header className="bg-slate-100 text-slate-800 p-6 font-bold tracking-wider text-md capitalize w-full z-10 cursor-pointer shadow-md sticky top-0  ">
      {/*  Links */}
      <nav className="flex justify-center items-center">
        <ul className="list-none flex flex-row flex-1 justify-center gap-6 text-slate-600 text-lg">
          {pages.map((page, index) => (
            <li
              key={index}
              className="transition-all hover:scale-110"
            >
              <NavLink
                to={`/${page}`}
                className={({ isActive }) =>
                  isActive ? "text-slate-950" : "text-[15px]"
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*   Button Icons */}
        <div className="flex gap-3 text-sm">
          <button className="border border-black py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-slate-50 flex items-center  gap-2  ">
            <UserIcon className="w-6" />
            Login
          </button>
          <button
            className="border border-black py-2 px-4 rounded-md transition-colors hover:bg-black hover:text-slate-50 flex items-center gap-2"
            onClick={() => navigate("/cart")}
          >
            <ShoppingCartIcon className="w-6" />
            Cart ({items.length})
          </button>
        </div>
      </nav>
    </header>
  );
};
