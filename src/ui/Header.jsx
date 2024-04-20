import styled, { css } from "styled-components";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useObserver } from "../context/ObserverContext";
import HeaderOptions from "./HeaderOptions";
import ButtonOrder from "./ButtonOrder";
import { useToken } from "../hooks/useToken";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  margin-bottom: 2rem;
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
  const { token } = useToken();

  return (
    <StyledHeader blur={ishome && isIntersecting} isHome={ishome}>
      <Logo />
      <HeaderMenu />
      {!token ? (
        <ButtonOrder type="secondary" to="/login">
          Login Now
        </ButtonOrder>
      ) : (
        <HeaderOptions />
      )}
    </StyledHeader>
  );
}

export default Header;
