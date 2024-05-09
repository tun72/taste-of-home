import {  NavLink } from "react-router-dom";

function HeaderList({ item }) {
  return (
    <li className="relative uppercase text-2xl transition-all  before:absolute before:bottom-[0] before:left-0 before:h-1 before:w-0 before:bg-[#51f5bf] before:transition-all before:content-[''] hover:text-[#51f5bf] before:hover:w-[100%] ">
      <NavLink to={item}>{item}</NavLink>
    </li>
  );
}

export default HeaderList;
