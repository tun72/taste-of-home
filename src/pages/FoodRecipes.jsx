import Recipe from "../features/Recipes/Recipe"

function FoodRecipes() {
    return (
        <div className="max-w-[130rem] mx-auto p-10 main-recipe relative grid grid-cols-[auto_1fr] ">
            <Recipe />
        </div>
    )
}

export default FoodRecipes
