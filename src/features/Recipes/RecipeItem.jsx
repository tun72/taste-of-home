import React from "react";
import { useRecipe } from "./useRecipe";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import RecipeData from "./RecipeData";

export default function RecipeItem() {
  const [searchParams] = useSearchParams();
  const country = searchParams.get("country");
  const category = searchParams.get("category");

  if (!country && !category)
    return (
      <div className="flex h-[90%] w-[100%] items-center justify-center ">
        <h4 className="text-[2.6rem] leading-[4rem] tracking-[0.2rem]">
          <span className="text-[3.1rem]">😊</span>Start by searching recipe or
          <br /> an ingredient. Have fun!
        </h4>
      </div>
    );
  return <RecipeData country={country} category={category} />;
}
