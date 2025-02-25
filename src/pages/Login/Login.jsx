import React from "react";

export const Login = () => {
  return (
    <article className="bg-slate-200 flex flex-col justify-center items-center gap-3">
      <h2>New for Here</h2>
      <form action="">
        <div className="my-2">
          <label htmlFor="user">Username:</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Type an username"
          />
        </div>

        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"

            id="password"
            placeholder="Type a password"
          />
        </div>
      </form>
    </article>
  );
};
