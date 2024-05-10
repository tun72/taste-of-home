import styled from "styled-components";
import SkeletonLoding from "../../ui/SkeletonLoding";
import { useCountry } from "./useCountry";
import SearchForm from "../../ui/SearchForm";
import UnderLine from "../../ui/Underline";

const StyleLayout = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const CountryLayout = styled.div`
  user-select: none;
  display: flex;
  width: 100%;
  overflow-x: scroll;
  gap: 2.5rem;
  transition: all 0.5s;

  &::-webkit-scrollbar {
    position: absolute;
    width: 0px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transprant;
  }

  &::-webkit-scrollbar-thumb {
    background: transprant;
    border-radius: 10px;
    transition: all 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-500);
  }
`;

const Country = styled.div`
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 7.5%;
  flex-direction: column;
  height: 8rem;
  border-radius: 1.2rem;
  border: 0 solid #5ff0d0;
  box-shadow: 1px 1px 5px #00000040;
  margin: 1rem 0 1rem 0.5rem;
  transition: all 0.3s ease-in-out;
`;
export default function RecipeByCountry() {
  const { country, isLoading } = useCountry();

  if (isLoading) return <SkeletonLoding />;

  return (
    <StyleLayout>
      <StyledHeader>
        <SearchForm />
      </StyledHeader>
      <CountryLayout className="categories__slider">
        {country.map((data) => {
          if (!data) return null;

          return (
            <Country data-country={data.name.common} key={data?.name?.common}>
              <img
                src={data?.flags?.svg}
                alt=""
                className="pointer-events-none h-[3rem] w-[3rem]"
              />
              <p className="pointer-events-none mt-[1rem] line-clamp-1 text-[1.25rem] text-black">
                {data?.name?.common.slice(0, 9) + "..."}
              </p>
            </Country>
          );
        })}
      </CountryLayout>
      <UnderLine />
    </StyleLayout>
  );
}
