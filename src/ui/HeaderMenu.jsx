import styled from "styled-components";
import HeaderList from "./HeaderList";
import { useLocation } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

// HOC pattern render pros cutom hook
function HeaderMenu() {
  const location = useLocation();

  const headerItems = ["recipes", "ingredients", "blogs"];
  // if (location.pathname !== "/home")
  //   headerItems = ["recipes", "ingredients", "Asia", "history"];

  return (
    <StyledHeaderMenu className="invisible w-0 md:visible md:w-auto before:h-2 before:w-[2rem] before:bg-green-300 before:absolute before:bottom-0">
      {headerItems.map((item) => {
        return <HeaderList item={item} key={item} />;
      })}
      {/* {location.pathname === "/home" && <DropDrownMenu />} */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
