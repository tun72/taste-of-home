function RecipeCategory() {
  return (
    <div class="recipe-container-right p-0">
      <h3>category</h3>
      <div class="catergories-container">
        <ul class="categories-list">
          <li>
            <div class="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div class="catergories-container-btn">
              <button class="btn-categories">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>

          <li>
            <div class="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div class="catergories-container-btn">
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>

          <li>
            <div class="catergories-container-icon">
              <img src="assets/pizza.svg" alt="" />
              <span>Pizza</span>
            </div>
            <div class="catergories-container-btn">
              <button>
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeCategory;
