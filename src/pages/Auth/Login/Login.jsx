import React, { useState } from "react";
import { Register } from "../Register/Register";

import { AnimateWraper } from "../../../components/layout/AnimateWraper";
import { useForm } from "react-hook-form";

import { login } from "../../../services/apiService";

export const Login = () => {
  const [isSignUp, setSignUp] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      await login(data);
      reset();
    } catch (error) {
      console.error("Error to login: ", error.message);
    }
  };

  const signUp = () => {
    setSignUp((prev) => !prev);
  };
  return (
    <AnimateWraper>
      <div className="my-8 px-2 flex flex-col-reverse md:flex-row md:justify-center md:items-center md:h-[55vh] lg:h-[75vh]">
        {isSignUp ? (
          <Register signUp={signUp} />
        ) : (
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="border-radius flex flex-col-reverse md:flex-row "
          >
            {/*  DATA */}
            <div className="text-slate-950 bg-slate-100 flex flex-col justify-between p-4 md:p-6 h-[320px] shadow-md">
              <h2 className="text-xl text-black">Sign In</h2>

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
                  })}
                />
                {errors.password && (
                  <span className="text-xs px-4 text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <button
                className="border border-black text-xs rounded-xl py-2"
                type="submit"
                disabled={!isValid}

              >
                Sign In
              </button>

              {/* Other actions */}
              <div className="flex justify-between mt-2">
                {/* Checkbox */}
                <div className="flex justify-center items-center gap-2">
                  <input type="checkbox" name="remeber" id="remeber" />
                  <label htmlFor="remeber" className="text-[11px]">
                    Remember Me
                  </label>
                </div>

                <button className="text-xs text-slate-500">
                  Forgot Password
                </button>
              </div>
            </div>

           
          </form>
        )}

         {/* Change between login /register*/}
         <div className="bg-slate-900 flex flex-col items-center justify-center p-16 gap-2 shadow-md h-[210px] md:h-[320px] ">
              <h2 className="text-slate-50 font-bold text-lg">
                Welcome to Login
              </h2>
              <p className="text-slate-300 text-xs">Don't have an account?</p>

              <button
                className="mt-2 border border-white rounded-xl px-3 py-2 text-slate-100 text-xs"
                type="button"
                onClick={signUp}
              >
                Sign Up
              </button>
            </div>
      </div>
    </AnimateWraper>
  );
};
