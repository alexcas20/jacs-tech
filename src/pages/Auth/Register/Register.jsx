import React from "react";
import { useForm } from "react-hook-form";

// service
import { createUser } from "../../../services/apiService";

export const Register = ({ signUp }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handleRegister = async (data) => {
    const formatData = {
      ...data,
      role: "USER",
    };

    console.info(formatData);

    try {
      await createUser(formatData);
      reset();
    } catch (error) {
      console.error("Error to create user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="border-radius flex flex-col md:flex-row"
    >
      {/*  DATA */}
      <div className="text-slate-950 bg-slate-100 flex flex-col justify-between p-4 md:p-6  h-[350px] shadow-md">
        <h2 className="text-xl">Sign Up</h2>

        {/* username */}
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-xs font-bold">
            Username
          </label>
          <input
            className="bg-slate-200 rounded-xl mx-2 py-1 px-3 placeholder:text-xs "
            placeholder="Username"
            type="text"
            {...register("username", {
              required: "This field is required",
            })}
          />
          {errors.username && (
            <span className="text-xs px-4 text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>

        {/*  password */}

        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-xs font-bold">
            Password
          </label>
          <input
            className="bg-slate-200 rounded-xl mx-2 py-1 px-3 placeholder:text-xs"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
          />
          {errors.password && (
            <span className="text-xs px-4 text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="passwordR" className="text-xs font-bold">
            Repeat Password
          </label>
          <input
            className="bg-slate-200 rounded-xl mx-2 py-1 px-3 placeholder:text-xs"
            placeholder="Verify your password"
            type="password"
          />
        </div>

        <button
          className="border border-black text-xs rounded-xl py-2
        "
          type="submit"
          disabled={!isValid}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};
