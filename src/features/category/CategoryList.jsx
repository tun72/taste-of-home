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
    <li>
      <button
        className="w-full flex justify-between items-center"
        onClick={() => {
          handelCategory(item);
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src={`./icons/${item}.svg`}
            alt={`ingredients_${item}`}
            width="30"
            height="30"
            className=""
          />

          <p className="text-[1.6rem]">{item}</p>
        </div>
        <div>
          <HiArrowRightCircle className="text-[2rem]" />
        </div>
      </button>
    </li>
  );
}

export default CategoryList;
