import { useCategory } from "./useCategory";
import CategoryList from "./CategoryList";
import { HiArrowDownCircle } from "react-icons/hi2";
import { useState } from "react";

function Category() {
  const { data, isLoading} = useCategory();
  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <div></div>;

  const categories = ["all", ...data];

  function handelCategoryOpen() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="lg:sticky static has-scrollbar lg:w-[35rem] md:w-[50%] w-[100%]" data-mobile-menu>
      <h2 className="p-[1.2rem] mb-[1.2rem] text-white rounded-[1rem] bg-[#0de39d] flex items-center justify-between  select-none" onClick={handelCategoryOpen}>
        Categories
        <HiArrowDownCircle
          className="cursor-pointer text-3xl"
        />
      </h2>

      {isOpen && (
        <div className="sidebar-category">
          <ul className="flex flex-col gap-5">
            {categories.map((category, index) => (
              <CategoryList item={category} key={index} />
            ))}
          </ul>
        </div>
      )}

      {/* <OrderShortCap /> */}
    </div>
  );
}

export default Category;
