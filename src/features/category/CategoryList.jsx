import { HiArrowRightCircle } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { useDeleteAllQuery } from "../../hooks/useDeleteAllQuery";

function CategoryList({ item }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setParam } = useDeleteAllQuery({ searchParams, setSearchParams });

  function handelCategory(category) {
    setParam({ name: "category", value: category });
  }
  return (
    <li>
      <button
        className="flex w-full items-center justify-between"
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
