import { URL } from "../utils/constants";

export async function getIngredients({ page, search, category }) {
  let link = URL + "/api/ingredients?page=" + page;
  if (search) link = link + "&search=" + search;

  if (category)
    link = link + "&category=" + (category === "all" ? "" : category);

  console.log(link);
  let query = await fetch(link);

  const data = await query.json();

  return data;
}

export async function getIngredient(id) {
  let link = URL + "/api/ingredients/" + id;
  console.log(link);
  let query = await fetch(link);
  const data = await query.json();
  return data;
}

export async function getCategory() {
  let link = URL + "/api/ingredients/ingredient-category";

  let query = await fetch(link);

  const data = await query.json();

  return data.category;
}
