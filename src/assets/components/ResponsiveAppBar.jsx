import { Link } from "react-router-dom";

export const ResponsiveAppBar = () => {
  // Pages
  const pages = ["products", "favs", "cart"];
  return (
    <header className="bg-teal-500 text-slate-800 p-6 font-bold text-lg uppercase w-full z-10 rounded-b-md cursor-pointer ">
      <h1 className="text-2xl tracking-widest text-slate-700 transition-all hover:text-slate-100">
        JacsTech
      </h1>
      <nav>
        <ul className="list-none flex flex-row justify-center gap-6 text-lg">
          {pages.map((page, index) => (
            <li
              key={index}
              className="transition-all hover:text-slate-100 hover:underline hover:-translate-y-1"
            >
              <Link to={`/${page}`}>{page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
