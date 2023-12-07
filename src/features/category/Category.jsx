import { useCategory } from "./useCategory";

function Category() {
  const { data } = useCategory();
  return (
    <div className="sidebar has-scrollbar w-20 h-20" data-mobile-menu>
      <h2 className="sidebar-title">Ingredients</h2>
      <div className="sidebar-category">
        <div className="sidebar-top">
          <button className="sidebar-close-btn" data-mobile-menu-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>

        <ul className="sidebar-menu-category-list category-list">
          <li className="sidebar-menu-category">
            <button className="sidebar-accordion-menu" data-accordion-btn>
              <div className="menu-title-flex">
                <img
                  src="./imgs/pizza.svg"
                  alt="clothes"
                  width="20"
                  height="20"
                  className="menu-title-img"
                />

                <p className="menu-title category-items">All</p>
              </div>

              <div>
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Category;
