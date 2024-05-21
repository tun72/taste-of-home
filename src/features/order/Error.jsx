import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="my-12 flex min-h-[70vh] w-full items-center justify-center px-4 ">
      <div className="flex w-full flex-col items-center gap-8">
        <h1 className="md:text-16xl w-full select-none text-center text-9xl font-black text-green-500">
          Something Went Wrong
        </h1>
        <p>Error is coming....</p>
        <div className="flex flex-row justify-between gap-8">
          <Link
            to="/ingredients"
            className="justiy-center flex cursor-pointer items-center rounded-md border border-green-500 px-5 py-2  text-xl hover:bg-green-500 hover:text-white"
          >
            Ingredients
          </Link>
          <Link
            to="/recipes"
            className="justiy-center flex cursor-pointer items-center rounded-md border border-green-500 px-5 py-2  text-xl hover:bg-green-500 hover:text-white"
          >
            Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}
