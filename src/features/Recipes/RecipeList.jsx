import React, { useState } from "react";
import { HiStar } from "react-icons/hi2";
import Modal from "../../ui/Model";
import RecipeMarkup from "./RecipeMarkup";
import { useSearchParams } from "react-router-dom";
import RecipeVideo from "./RecipeVideo";
import { useRecipeDetail } from "./useRecipeDetail";

export default function RecipeList({ name, image, id }) {
  const [searchParams] = useSearchParams();
  const country = searchParams.get("country");

  return (
    <li className="group flex w-[100%] cursor-pointer flex-col">
      <div className="h-[13rem] w-[100%] overflow-hidden rounded-[2rem]">
        <img
          src={image}
          alt={name}
          className="block h-[100%] w-[100%] object-cover"
        />
      </div>
      <Modal>
        <Modal.Open opens="detail">
          <div className="rounded-[1.5rem]  p-[10px_15px] transition-all duration-300 group-hover:mt-[-2.5rem]  group-hover:translate-x-[-1.4rem]  group-hover:bg-[#0de39d]  group-hover:p-[1.5rem_2rem]">
            <p className="line-clamp-1 text-2xl">{name}</p>
            <p className="flex items-center gap-[0.5rem]">
              <HiStar className="text-[1.5rem] font-bold opacity-[0.6]" />
              <span>
                <span className="text-[1.3rem] font-bold">3.8</span>
                <span className="ml-[1.4rem] text-[1.3rem]">{country}</span>
              </span>
            </p>
          </div>
        </Modal.Open>
        <Modal.Window name="detail">
          <RecipeMarkup id={id} />
        </Modal.Window>
      </Modal>
    </li>
  );
}
