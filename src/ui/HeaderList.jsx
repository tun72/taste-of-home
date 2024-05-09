import { Link } from "react-router-dom";
import styled from "styled-components";
const ListStyle = styled.li`
  font-size: 1.7rem;
  text-transform: capitalize;
`;

function HeaderList({ item }) {
  return (
    <ListStyle>
      <Link to={item} className="hover:text-[#51f5bf] transition-all">
        {item}
      </Link>
    </ListStyle>
  );
}

export default HeaderList;
