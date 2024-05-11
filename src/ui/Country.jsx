import styled, { css } from "styled-components";

export const CountryLayout = styled.div`
  user-select: none;
  display: flex;
  width: 80vw;
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

export const Country = styled.div`
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 7.5%;
  flex-direction: column;
  height: 8rem;
  border-radius: 1.2rem;
  box-shadow: 1px 1px 5px #00000040;
  margin: 1rem 0 1rem 0.5rem;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isactive &&
    css`
      border: 5px solid green;
    `}
`;
