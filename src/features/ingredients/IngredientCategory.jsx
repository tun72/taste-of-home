import React from "react";
import Category from "../category/Category";
import { useCategory } from "../category/useCategory";
import CategoryList from "../category/CategoryList";

export default function IngredientCategory() {
  const { data, isLoading } = useCategory();

  return (
    <Category>
      {!isLoading && (
        <ul className="flex flex-col gap-[2rem]">
          {data.map((category, index) => (
            <CategoryList item={category} key={index} />
          ))}
        </ul>
      )}
    </Category>
  );
}
