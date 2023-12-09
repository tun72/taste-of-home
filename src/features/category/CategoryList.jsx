import { HiArrowRightCircle } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function CategoryList({ item }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handelCategory(category) {
    const page = searchParams.get("page");
    const search = searchParams.get("search");
    if (page || search) {
      searchParams.delete("page");
      searchParams.delete("search");
    }
    searchParams.set("category", category);
    setSearchParams(searchParams);
  }
  return (
    <li className="sidebar-menu-category">
      <button
        className="sidebar-accordion-menu"
        onClick={() => {
          handelCategory(item);
        }}
      >
        <div className="menu-title-flex">
          <img
            src={`./icons/${item}.svg`}
            alt={`ingredients_${item}`}
            width="20"
            height="20"
            className="menu-title-img"
          />

          <p className="menu-title category-items">{item}</p>
        </div>
        <div>
          <HiArrowRightCircle className="text-[1.8rem]" />
        </div>
      </button>
    </li>
  );
}

export default CategoryList;
