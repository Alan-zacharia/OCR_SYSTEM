import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <article className="m-auto text-center">
        <section>
          <h1 className="text-4xl font-bold" aria-live="assertive">
            Error 404 :)
          </h1>
        </section>
        <section className="flex flex-col items-center gap-5">
          <h2 className="text-3xl text-red-500 font-bold">
            Page Not Found ...!
          </h2>
          <Link to={"/"}>
            <button className="p-2 w-32 bg-red-500 rounded-xl hover:bg-red-600 text-xl font-bold text-white">
              Home
            </button>
          </Link>   
        </section>
      </article>
    </main>
  );
};

export default PageNotFound;
