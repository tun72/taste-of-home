import { Link } from "react-router-dom";
import styled from "styled-components";
const ListStyle = styled.li`
  font-size: 1.7rem;
  text-transform: capitalize;
`;

function HeaderList({ item, isHome }) {
  return (
    <ListStyle className="menu-category">
      {isHome ? (
        <a href={`#${item}`} className="menu-title">
          {item}
        </a>
      ) : (
        <Link to={item}>{item}</Link>
      )}
    </ListStyle>
  );
}

export default HeaderList;
