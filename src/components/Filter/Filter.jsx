import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

// Action btn filter
const actions = ["low", "high"];

export const Filter = ({
  category,
  onChangeCategory,
  categorySelected,
  actionSelected,
  handleSort,
}) => {
  // handle change category
  const handleChangeCategory = (category) => {
    onChangeCategory(category);
  };

  // sort prducts
  const onSort = (action) => {
    handleSort(action);
  };

  // setVisible mobile filters
  const [mobileFilter, setMobileFilter] = useState(false);

  return (
    <>
      <div
        className={`${
          mobileFilter ? "opacity-0" : "cursor-pointer w-full px-4 pb-10 md:hidden"
        }`}
      >
        <AdjustmentsHorizontalIcon
          className="w-10 text-slate-800 transition-transform hover:scale-105"
          onClick={() => setMobileFilter(!mobileFilter)}
        />
      </div>

      {/* Mobile filter */}
      {mobileFilter && (
        <div
          className={`fixed bottom-0 left-0 w-full h-[55%] z-30 bg-slate-900 text-slate-50 transition-all duration-500 cursor-pointer rounded-t-2xl md:hidden ${
            mobileFilter ? "translate-y-0" : "translate-y-full"
          } `}
        >
          <div className="flex justify-end p-4">
            <XMarkIcon
              className="w-8 transition-transform hover:scale-110"
              onClick={() => setMobileFilter(!mobileFilter)}
            />
          </div>
          {/* Title */}
          <div className="px-4 mb-10">
            <span className="text-2xl font-semibold tracking-wider">
              Filter And Sort
            </span>
            <hr className="my-3 border-slate-400 w-[95%]" />
          </div>

          <div className="w-full h-full flex flex-col items-center justify-stretch gap-4">
            {/*  Category Select */}
            <span className="font-bold">Category:</span>
            <select
              value={categorySelected}
              onChange={(e) => handleChangeCategory(e.target.value)}
              className="w-[150px] rounded-md p-2 border border-slate-50 text-slate-950"
            >
              <option value="all">All</option>
              {category.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <hr className="my-3  border-slate-400 w-[60%]" />

            {/*  Order Buttons */}
            <span className="mb-1 font-bold">Order By:</span>
            <div className=" flex gap-2 relative cursor-pointer">
              {actions.map((action, i) => (
                <button
                  key={i}
                  className={`" p-1 flex justify-center w-[100px] rounded-md gap-1 capitalize text-sm " ${
                    action === actionSelected
                      ? "bg-slate-500 "
                      : "border border-slate-50"
                  }`}
                  onClick={() => onSort(action)}
                >
                  {action} price
                </button>
              ))}
              <XMarkIcon
                className="w-4 transition-all hover:scale-125 absolute bottom-14 -right-10"
                onClick={() => onSort("quit")}
              />
            </div>
            <hr className="my-3  border-slate-400 w-[60%]" />
          </div>
        </div>
      )}

      {/* Desktop filter */}
      <div className=" hidden md:block w-[350px] md:w-[200px] h-1/2 md:sticky md:top-[30%] lg:left-24 2xl:left-36 text-slate-950 px-2 py-4 rounded-md border mb-8 ml-4">
        <div className="flex flex-col font-bold">
          <span className="my-1">Category:</span>

          {/*  Category Select */}
          <select
            value={categorySelected}
            onChange={(e) => handleChangeCategory(e.target.value)}
            className="w-[150px] rounded-md p-2 border border-slate-300"
          >
            <option value="all">All</option>
            {category.map((category, i) => (
              <option key={i} value={category}>
                {category}
              </option>
            ))}
          </select>
          <hr className="my-3" />

          {/*  Order Buttons */}
          <span className="mb-1">Order By:</span>
          <div className=" flex gap-2 relative cursor-pointer">
            {actions.map((action, i) => (
              <button
                key={i}
                className={`" p-1 flex justify-center w-[80px] rounded-md gap-1 capitalize text-sm " ${
                  action === actionSelected ? "bg-slate-300 " : "border"
                }`}
                onClick={() => onSort(action)}
              >
                {action} price
              </button>
            ))}
            <XMarkIcon
              className="w-4 transition-all hover:scale-125 absolute bottom-12 right-0"
              onClick={() => onSort("quit")}
            />
          </div>
          <hr className="my-3" />
        </div>
      </div>
    </>
  );
};
