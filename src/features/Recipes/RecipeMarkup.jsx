import React, { useState } from "react";
import { useRecipeDetail } from "./useRecipeDetail";
import Spinner from "../../ui/Spinner";
import {
  HiAcademicCap,
  HiBookOpen,
  HiCheck,
  HiPlay,
  HiStop,
} from "react-icons/hi2";
import RecipeVideo from "./RecipeVideo";
import Modal from "../../ui/Model";
import RecipeBtn from "./RecipeBtn";

export default function RecipeMarkup({ id }) {
  let { data, isLoading } = useRecipeDetail({ id });
  const [isOpen, setIsOpen] = useState(false);

  function handelVideo() {
    console.log("hi");
    setIsOpen((prev) => !prev);
  }

  if (isLoading)
    return (
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Spinner />
      </div>
    );

  data = data[0];
  const {
    strMeal: title,
    strMealThumb: image,
    strSource: source,
    strTags: tags,
    strArea: area,
    strCategory: category,
    strInstructions: instruction,
    strYoutube: youtube,
  } = data;

  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    ingredients.push({
      name: data["strIngredient" + i],
      measure: data["strMeasure" + i],
    });
  }

  ingredients = ingredients.filter(
    (ing) =>
      ![null, ""].includes(ing?.measure?.trim()) ||
      ![null, ""].includes(ing?.name?.trim()),
  );

  return (
    <>
      {isOpen ? (
        <RecipeVideo youtube={youtube} handelVideo={handelVideo} />
      ) : (
        <>
          <div className="h-[280px] w-full">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>

          <div className="relative select-none">
            <h4 className="absolute  left-[13%] top-[-10rem] inline-block rotate-[-8deg] skew-x-[-8deg] skew-y-[-4deg] bg-gradient-to-tl  from-[#0de39d] to-[#7cf358] p-[1.8rem_5rem] text-[2.5rem] font-bold uppercase text-white">
              {title}
            </h4>
            <h5 className="absolute left-[44%] top-[-4rem] inline-block rotate-[-8deg] skew-x-[-8deg] skew-y-[-4deg] bg-gradient-to-tl  from-[#0de39d] to-[#7cf358] p-[1.8rem_5rem] text-[2.5rem] font-bold uppercase text-white">
              {area}
            </h5>
          </div>
        </>
      )}

      <div className="relative select-none p-[2rem]">
        <div className="mb-[1rem] mt-[3.5rem] flex items-center justify-between p-[0_2rem]">
          <div className="flex items-center gap-[2rem]">
            <span className="flex items-center gap-4">
              <HiAcademicCap className="text-[3rem] text-green-400" />
              {ingredients.length} Measurement
            </span>
            <span className="flex items-center gap-4">
              <HiBookOpen className="text-[3rem] text-green-400" />
              {ingredients.length} Ingredients
            </span>
          </div>

          <RecipeBtn handelVideo={handelVideo} isOpen={isOpen} />
        </div>

        <hr />
        <div className="recipe-ingredient mb-[1rem] mt-[2rem] p-[0_4rem]">
          <h6 className="text-center font-bold uppercase tracking-widest text-green-400">
            Recipe Ingredients
          </h6>
          <div className="mt-[1rem] flex flex-wrap">
            {ingredients.map((ing, index) => (
              <div className="max-w-[50%] flex-[0_0_50%] p-[1rem]" key={index}>
                <span className="flex items-center gap-2">
                  <HiCheck className="text-[2.2rem] font-bold text-green-400" />
                  {ing.name}({ing.measure})
                </span>
              </div>
            ))}
          </div>
        </div>
        <hr />

        <div className="recipe-cooking mt-[2rem] p-[0_2rem]">
          <h6 className="text-center font-bold uppercase tracking-widest text-green-400">
            How to cook it
          </h6>
          <p className="mt-4 font-mono text-[2rem]">{instruction}</p>
        </div>
      </div>
    </>
  );
}
