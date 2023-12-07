import styled, { css } from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useObserver } from "../context/ObserverContext";
import HeaderOptions from "./HeaderOptions";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0.6rem;
  z-index: 10;

  ${(props) =>
    props.blur === true &&
    css`
      background-color: #ffffff95;
      backdrop-filter: blur(5px);
    `}
  ${(props) =>
    props.isHome &&
    css`
      position: fixed;
    `}
`;

function Header({ ishome }) {
  const { isIntersecting } = useObserver();

  return (
    <StyledHeader blur={isIntersecting} isHome={ishome}>
      <Logo />
      <HeaderMenu />
      <HeaderOptions />
    </StyledHeader>
  );
}

export default Header;
