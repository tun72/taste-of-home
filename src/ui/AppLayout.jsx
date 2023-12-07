import styled, { css } from "styled-components";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const Main = styled.main`
  overflow-y: scroll;
`;
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 1fr;

  ${(props) =>
    !props.isHome &&
    css`
      grid-template-rows: auto 1fr;
    `}
`;

function AppLayout() {
  const location = useLocation();

  return (
    <StyledAppLayout isHome={location.pathname === "/home"}>
      <Header ishome={location.pathname === "/home"}/>
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
