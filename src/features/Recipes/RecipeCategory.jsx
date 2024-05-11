
import Category from "../category/Category";
import { useCategory } from "./useCategory";
import CategoryList from "../category/CategoryList";

function RecipeCategory() {
  const { data, isLoading } = useCategory();
  return (
    <Category>
      {!isLoading && (
        <ul className="flex flex-col gap-[2rem]">
          {data.map((category, index) => (
            <CategoryList item={category.strCategory} key={index} />
          ))}
        </ul>
      )}
    </Category>
  );
}

export default RecipeCategory;
