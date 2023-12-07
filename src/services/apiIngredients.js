import { URL } from "../utils/constants";

export async function getIngredient({ page, search }) {
  let link = URL + "/api/ingredients?page=" + page;
  if (search) link = link + "&search=" + search;

  let query = await fetch(link);

  const data = await query.json();

  return data;
}

export async function getCategory({ page, search }) {
  let link = URL + "/api/category";

  let query = await fetch(link);

  const data = await query.json();

  return data;
}
