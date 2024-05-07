import SkeletonLoding from "../../ui/SkeletonLoding";
import { useCountry } from "./useCountry";

function RecipeByCountry() {
  const { country, isLoading } = useCountry();

  if (isLoading) {
    return <SkeletonLoding />;
  }

  let countries = country.slice(99, 110);
  console.log(countries);
  return (
    <>
      <div className="categories ml-4 mt-5">
        <div className="categories__slider">
          {countries.map(({ denName, flags, name }) => {
            return (
              <div
                className="categories__slider--item"
                data-country={name.common}
              >
                <img src={flags.svg} alt="" />
                <p>{name.common}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="categories__endLine mt-4"></div>
    </>
  );
}

export default RecipeByCountry;
