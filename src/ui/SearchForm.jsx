import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";
import {useSearchParams } from "react-router-dom";
import { useDeleteAllQuery } from "../hooks/useDeleteAllQuery";

const StyledSearchForm = styled.form`
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  min-width: 50rem;
  width: 50rem;
  height: 45px;
  display: flex;
  padding: 10px 20px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  -webkit-border-radius: 20px;
`;

const SearchFormInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 1.6rem;
`;

function SearchForm() {
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const { setParam } = useDeleteAllQuery({ searchParams, setSearchParams });
  function handelSubmit(e) {
    e.preventDefault();
    setParam({ name: "search", value: search });
  }

  return (
    <StyledSearchForm onSubmit={handelSubmit}>
      <SearchFormInput
        type="text"
        className="search--input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search"
      />
      <button className="text-[1.5rem] ">
        <HiMagnifyingGlass />
      </button>
    </StyledSearchForm>
  );
}

export default SearchForm;
