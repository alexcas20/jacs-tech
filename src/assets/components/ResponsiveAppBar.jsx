import { Link } from "react-router-dom";

export const ResponsiveAppBar = () => {
  // Pages
  const pages = ["products", "favs", "cart"];
  return (
    <header className="bg-slate-100 text-slate-800 p-6 font-bold tracking-wider text-md capitalize w-full z-10 cursor-pointer shadow-md sticky top-0 ">
      <h1 className="text-2xl tracking-widest text-slate-700 transition-all">
        JacsTech
      </h1>

      {/*  Links */}
      <nav className="flex justify-center">
        <ul className="list-none flex flex-row flex-1 justify-center gap-6 text-slate-500">
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
        <div className="flex gap-4">
          <button className="border border-black py-1 px-4 rounded-md transition-colors hover:bg-black hover:text-slate-50 ">
            Login
          </button>
          <button className="border border-black py-1 px-4 rounded-md transition-colors hover:bg-black hover:text-slate-50 ">
            Cart
          </button>
        </div>
      </nav>
    </header>
  );
};
