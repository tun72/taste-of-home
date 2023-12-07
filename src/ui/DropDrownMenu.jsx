import { Link } from "react-router-dom";

function DropDrownMenu() {
  return (
    <li class="menu-category">
      <a href="rescipeMainpage.html" class="menu-title">
        Other
      </a>

      <ul class="dropdown-list">
        <li class="dropdown-item">
          <Link to='food-recipe'>Food recipe</Link>
        </li>

        <li class="dropdown-item">
          <Link to="ingredients">Ingredient</Link>
        </li>
      </ul>
    </li>
  );
}

export default DropDrownMenu;
