import React from "react";
import Category from "../category/Category";
import { useCategory } from "../category/useCategory";
import CategoryList from "../category/CategoryList";

export default function CartCategory() {
  const { data, isLoading } = useCategory();

  return (
    <Category>
      {!isLoading && (
        <ul className="flex flex-col gap-5">
          {data.map((category, index) => (
            <CategoryList item={category} key={index} />
          ))}
        </ul>
      )}
    </Category>
  );
}
