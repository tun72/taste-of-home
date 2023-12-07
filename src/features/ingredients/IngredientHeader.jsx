import { useState } from "react";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useSearchParams } from "react-router-dom";

function IngredientHeader() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(function () {
    return searchParams.get("search") ? searchParams.get("search") : "";
  });
  // const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function handelSearch() {
    navigate("/ingredients/?search=" + search, "replace");
    // searchParams.set("search", search);
    // setSearchParams(searchParams);
  }
  return (
    <div className="flex items-center justify-between">
      <Heading as="h5">
        {search === "" ? "All Ingredients" : `Ingrdients (search=${search})`}
      </Heading>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          name="search"
          placeholder="Search Ingredient"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-[1.5rem] " onClick={handelSearch}>
          <HiMagnifyingGlass />
        </button>
      </div>
    </div>
  );
}

export default IngredientHeader;
