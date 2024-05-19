import styled, { css } from "styled-components";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";

const Main = styled.main`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    position: absolute;
    width: 8px;
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
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr;
`;

function AppLayout() {
  const location = useLocation();

  return (
    <StyledAppLayout>
      <Header ishome={location.pathname === "/home" ? "true" : ""} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
