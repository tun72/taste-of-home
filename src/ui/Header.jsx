import styled, { css } from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useObserver } from "../context/ObserverContext";
import HeaderOptions from "./HeaderOptions";
import ButtonOrder from "./ButtonOrder";
import { useToken } from "../hooks/useToken";

const StyledHeader = styled.header`
  width: 100%;
  z-index: 10;
  /* background-color: green; */
  ${(props) =>
    props.blur === "true" &&
    css`
      background-color: #ffffff95;
      backdrop-filter: blur(5px);
    `}
  ${(props) =>
    props.ishome &&
    css`
      position: fixed;
    `}
`;

const StyledNav = styled.nav`
  width: 86%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
function Header({ ishome = "" }) {
  const { isIntersecting } = useObserver();
  const { token } = useToken();

  return (
    <StyledHeader
      blur={isIntersecting === true && ishome === "true" ? "true" : ""}
      ishome={ishome}
    >
      <StyledNav>
        <Logo />
        <HeaderMenu />
        {!token ? (
          <ButtonOrder type="secondary" to="/login">
            Login Now
          </ButtonOrder>
        ) : (
          <HeaderOptions />
        )}
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
