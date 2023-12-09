import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { useCategory } from "./useCategory";
import Spinner from "../../ui/Spinner";
import CategoryList from "./CategoryList";

function Category() {
  const { data, isLoading, error } = useCategory();

  if (isLoading) {
    return <div></div>;
    // return <Spinner />;
  }

  const categories = ["all", ...data];
  return (
    <div className="sidebar has-scrollbar w-[35rem]" data-mobile-menu>
      <h2 className="sidebar-title">Ingredients</h2>
      <div className="sidebar-category">
        <ul className="flex flex-col gap-7">
          {categories.map((category) => (
            <CategoryList item={category} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
