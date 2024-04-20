import { useCategory } from "./useCategory";
import CategoryList from "./CategoryList";
import styled from "styled-components";
import OrderShortCap from "../order/OrderShortCap";

function Category() {
  const { data, isLoading, error } = useCategory();

  if (isLoading) return <div></div>;

  const categories = ["all", ...data];
  return (
    <div className="sidebar has-scrollbar w-[35rem]" data-mobile-menu>
      <h2 className="sidebar-title bg-green-400">Ingredients</h2>
      <div className="sidebar-category">
        <ul className="flex flex-col gap-5">
          {categories.map((category) => (
            <CategoryList item={category} />
          ))}
        </ul>
      </div>

      <OrderShortCap />
    </div>
  );
}

export default Category;
