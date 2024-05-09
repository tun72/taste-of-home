import styled from "styled-components";
import SkeletonLoding from "../../ui/SkeletonLoding";
import { useCountry } from "./useCountry";

const CountryLayout = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: 2rem;
  padding: 0 1rem;
  transition: all 0.5s;
`;

const Country = styled.div`
  cursor: pointer;
  background-color: white;
  flex: 0 0 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  height: 100px;
  border-radius: 10px;
  border: 0 solid #5ff0d0;
  box-shadow: 1px 1px 5px #00000040;
  margin: 2rem 0;
  transition: all 0.3s ease-in-out;
`;
export default function RecipeByCountry() {
  const { country, isLoading } = useCountry();

  if (isLoading) {
    return <SkeletonLoding />;
  }

  let countries = country.slice(99, 110);
  console.log(countries);
  return (
    <>
      <CountryLayout className="categories__slider">
        {countries.map(({ denName, flags, name }) => {
          return (
            <Country data-country={name.common}>
              <img
                src={flags.svg}
                alt=""
                className="pointer-events-none h-[3rem] w-[3rem]"
              />
              <p className="pointer-events-none mt-[1rem] text-2xl text-black">
                {name.common}
              </p>
            </Country>
          );
        })}
      </CountryLayout>
      <div className="categories__endLine mt-4"></div>
    </>
  );
}
