import MealList from "./MealList";

function MostRecipeSection() {
  return (
    <section
      class="section-meal  h-full w-full px-[7rem] py-[8rem]"
      id="food_receipe"
    >
      <div class="meal">
        <div class="meal__header">
          <h2 class="meal__heading">Most Recipes</h2>
          <a href="rescipeMainpage.html" class="meal__all">
            view all
          </a>
        </div>
        <nav class="meal__nav">
          <ul class="meal__list">
            <MealList />
          </ul>
        </nav>
        <div class="meal__post"></div>
      </div>
    </section>
  );
}

export default MostRecipeSection;
