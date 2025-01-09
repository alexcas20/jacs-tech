import { Link, useNavigate } from "react-router-dom";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export const ResponsiveAppBar = () => {
  // navigate to cart
  const navigate = useNavigate();

  // Pages
  const pages = ["home", "products", "favs", "cart"];
  return (
    <header className="bg-slate-100 text-slate-800 p-6 font-bold tracking-wider text-md capitalize w-full z-10 cursor-pointer shadow-md sticky top-0  ">
      {/*  Links */}
      <nav className="flex justify-center items-center">
        <ul className="list-none flex flex-row flex-1 justify-center gap-6 text-slate-500 text-lg">
          {pages.map((page, index) => (
            <li
              key={index}
              className="transition-all hover:text-black hover:scale-110"
            >
              <Link to={`/${page}`}>{page}</Link>
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
            Cart
          </button>
        </div>
      </nav>
    </header>
  );
};
