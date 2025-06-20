import { useState } from "react";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

function IngredientHeader() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(function () {
    return searchParams.get("search") ? searchParams.get("search") : "";
  });

  const category = searchParams.get("category");
  const page = searchParams.get("page");
  if (page || category) {
    searchParams.delete("page");
    searchParams.delete("category");
  }

  function handelSearch(e) {
    e.preventDefault();
    searchParams.set("search", search);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-between">
      <Heading as="h4">
        {category === "all"
          ? "All ingredients"
          : category || search || "All ingredients"}
      </Heading>
      <form
        className="flex items-center gap-2"
        onSubmit={(e) => handelSearch(e)}
      >
        <Input
          type="text"
          name="search"
          placeholder="Search Ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-[1.5rem] ">
          <HiMagnifyingGlass />
        </button>
      </form>
    </div>
  );
}

export default IngredientHeader;
