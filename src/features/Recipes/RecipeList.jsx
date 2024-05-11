import React from "react";
import { HiStar } from "react-icons/hi2";
export default function RecipeList({ name, image, id }) {
  return (
    <li className="flex w-[250px] flex-col">
      <div className="h-[13rem] w-[100%] overflow-hidden rounded-[2rem]">
        <img
          src={image}
          alt={name}
          className="block h-[100%] w-[100%] object-cover"
        />
      </div>
      <div className="p-[10px_15px]">
        <p className="line-clamp-1 text-3xl">{name}</p>
        <p className="flex items-center gap-[0.5rem]">
          <HiStar className="text-[1.5rem] font-bold opacity-[0.6]" />
          <span>
            <span className="text-[1.3rem] font-bold">3.8</span>
            <span className="ml-[1.4rem] text-[1.3rem]">American</span>
          </span>
        </p>
      </div>
    </li>
  );
}
