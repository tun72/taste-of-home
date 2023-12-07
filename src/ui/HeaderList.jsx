import styled from "styled-components";
const ListStyle = styled.li`
  font-size: 1.7rem;
  text-transform: capitalize;
`;

function HeaderList({ item }) {
  return (
    <ListStyle className="menu-category">
      <a href={`#${item}`} className="menu-title">
        {item}
      </a>
    </ListStyle>
  );
}

export default HeaderList;
