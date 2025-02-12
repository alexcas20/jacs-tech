import { Controller, useForm } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
import { Rate } from "../Rate/Rate";

export const CustomForm = ({ isOpen, closeModal, id }) => {
  // Usamos useForm para obtener los métodos de manejo del formulario
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      rating: 0,
    },
  });

  // Función que se ejecuta cuando se envía el formulario
  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar los datos del formulario
    const setData = {
      ...data,
      product: {
        id,
      },
    };

    postReview(setData);
    reset();
  };

  const postReview = async (data) => {
    const URL = "http://localhost:8080/api/v1/productReviews";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error!");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (!isOpen) return null;
  return (
    <article
      className={`sticky bottom-[33%] flex justify-center items-center h-[110px] z-50 opacity-0 transition-opacity duration-500 ${
        isOpen && "opacity-100"
      } `}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-800 p-4 rounded-md text-slate-50"
      >
        <div className="flex w-full justify-end text-slate-50">
          <button type="button" onClick={closeModal}>
            <XMarkIcon className="w-8" />
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-slate-50"
            >
              Username
            </label>
            <div className="mt-1">
              <div className="flex items-center rounded-lg bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  id="username"
                  {...register("user", {
                    required: "Este campo es obligatorio",
                  })}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="janesmith"
                />
              </div>
              {errors.user && (
                <span className="text-slate-100 text-sm px-2">
                  {errors.user.message}
                </span>
              )}
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm/6 font-medium text-slate-50"
            >
              Your Review
            </label>
            <div className="mt-">
              <textarea
                id="about"
                rows="3"
                {...register("review", {
                  required: "Este campo es obligatorio",
                })}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              ></textarea>
              {errors.review && (
                <span className="text-slate-50 text-sm px-2">
                  {errors.review.message}
                </span>
              )}
            </div>
          </div>

          {/*   Rate product */}

          <div className="col-span-full flex flex-col items-center">
            <label
              htmlFor="rating"
              className="text-sm/6 font-medium text-slate-50"
            >
              Your rate!
            </label>
            <div className="col-span-full mt-2">
              <Controller
                control={control}
                name="rating"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Rate
                    valueRate={value}
                    onChange={onChange}
                    visibleLabelId="rating_label"
                    onBlur={onBlur}
                    width={150}
                  />
                )}
              ></Controller>
            </div>
          </div>
        </div>

        <div className="my-4 flex justify-end">
          <button
            className="px-3 py-2 border border-black rounded-md transition-colors hover:bg-black hover:text-slate-50"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </article>
  );
};
