import styled from "styled-components";
import SkeletonLoding from "../../ui/SkeletonLoding";
import { useCountry } from "./useCountry";
import SearchForm from "../../ui/SearchForm";
import UnderLine from "../../ui/Underline";
import { Country, CountryLayout } from "../../ui/Country";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useDeleteAllQuery } from "../../hooks/useDeleteAllQuery";

const StyleLayout = styled.div`
  margin-top: 1rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  overflow: hidden;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export default function RecipeByCountry() {
  const { country, isLoading } = useCountry();

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentCountry, setCurrentCountry] = useState(
    searchParams.get("country"),
  );

  const { setParam } = useDeleteAllQuery({ searchParams, setSearchParams });

  function handelCountry(country) {
    setParam({ name: "country", value: country });
    setCurrentCountry((prev) => country);
  }

  return (
    <StyleLayout>
      <StyledHeader>
        <SearchForm />
      </StyledHeader>
      {isLoading ? (
        <SkeletonLoding />
      ) : (
        <CountryLayout className="categories__slider">
          {country.map((data) => {
            if (!data) return null;

            return (
              <Country
                key={data?.name?.common}
                isactive={
                  currentCountry === data?.demonyms?.eng?.f ? "true" : ""
                }
                onClick={(e) => {
                  handelCountry(data?.demonyms?.eng?.f);
                }}
              >
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
      )}
      <UnderLine />
    </StyleLayout>
  );
}
