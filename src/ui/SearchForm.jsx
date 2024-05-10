import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";

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
  return (
    <StyledSearchForm>
      <SearchFormInput
        type="text"
        className="search--input"
        placeholder="Search"
      />
      <button className="text-[1.5rem] ">
        <HiMagnifyingGlass />
      </button>
    </StyledSearchForm>
  );
}

export default SearchForm;
