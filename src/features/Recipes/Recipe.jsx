import Spinner from "../../ui/Spinner";
import { useRecipe } from "./useRecipe";
import Heading from "../../ui/Heading";
import SkeletonLoading from "./RecipeByCountry";
import SearchForm from "../../ui/SearchForm";
import RecipeCategory from "./RecipeCategory";
function Recipe() {
  return (
    <div>
      <SearchForm />
      <SkeletonLoading />
    </div>
  );
}

export default Recipe;
