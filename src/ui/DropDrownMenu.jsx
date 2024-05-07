import { Link } from "react-router-dom";

function DropDrownMenu() {
  return (
    <li className="menu-category">
      <a href="rescipeMainpage.html" className="menu-title">
        Other
      </a>

      <ul className="dropdown-list">
        <li className="dropdown-item">
          <Link to='recipes'>Food recipe</Link>
        </li>

        <li className="dropdown-item">
          <Link to="ingredients">Ingredient</Link>
        </li>
      </ul>
    </li>
  );
}

export default DropDrownMenu;
