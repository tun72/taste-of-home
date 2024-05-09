import { useCategory } from "./useCategory";
import CategoryList from "./CategoryList";
import { HiArrowDownCircle } from "react-icons/hi2";
import { useEffect, useState } from "react";

function Category() {
  const { data, isLoading } = useCategory();
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) setIsOpen(false);
      if (window.innerWidth > 1000) setIsOpen(true);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handelCategoryOpen() {
    if (window.innerWidth < 1000) setIsOpen((prev) => !prev);
  }

  if (isLoading) return <div></div>;
  const categories = ["all", ...data];

  return (
    <div
      className="has-scrollbar static w-[100%] md:w-[50%] lg:sticky lg:w-[35rem]"
      data-mobile-menu
    >
      <h2
        className="mb-[1.2rem] flex select-none items-center justify-between rounded-[1rem] bg-[#0de39d] p-[1.2rem]  text-white"
        onClick={handelCategoryOpen}
      >
        Categories
        <HiArrowDownCircle className="cursor-pointer text-3xl" />
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
