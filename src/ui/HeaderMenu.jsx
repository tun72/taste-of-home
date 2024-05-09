import styled from "styled-components";
import HeaderList from "./HeaderList";
import DropDrownMenu from "./DropDrownMenu";
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
    <StyledHeaderMenu className="desktop-menu-category-list invisible w-0 md:visible md:w-auto">
      {headerItems.map((item) => {
        return (
          <HeaderList
            item={item}
            key={item}
            isHome={location.pathname === "/home"}
          />
        );
      })}
      {/* {location.pathname === "/home" && <DropDrownMenu />} */}
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
