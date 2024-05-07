function RecipeCategory() {
  return (
    <div className="recipe-container-right p-0">
      <h3>category</h3>
      <div className="catergories-container">
        <ul className="categories-list">
          <li>
            <div className="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div className="catergories-container-btn">
              <button className="btn-categories">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>

          <li>
            <div className="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div className="catergories-container-btn">
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>

          <li>
            <div className="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div className="catergories-container-btn">
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeCategory;
