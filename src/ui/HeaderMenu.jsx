import styled from "styled-components";
import HeaderList from "./HeaderList";
import DropDrownMenu from "./DropDrownMenu";
import { useLocation } from "react-router-dom";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 3rem;
`;

// HOC pattern render pros cutom hook
function HeaderMenu() {
  const location = useLocation();

  let headerItems = [
    "popular food",
    "services",
    "most recipe",
    "reviews",
    "chefs",
  ];

  if (location.pathname !== "/home")
    headerItems = ["Food recipes", "ingredients", "Asia", "history"];

  headerItems.forEach((item) => console.log(item));
  return (
    <StyledHeaderMenu className="desktop-menu-category-list invisible w-0 md:visible md:w-auto">
      {headerItems.map((item) => {
        return <HeaderList item={item} key={item} />;
      })}
      <DropDrownMenu />
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
