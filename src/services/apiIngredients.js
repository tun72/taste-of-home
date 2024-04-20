import { useToken } from "../hooks/useToken";
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

export async function placeOrder({ token, order }) {
  const result = await fetch(`${URL}/api/ingredients/add-to-shipping`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      ...order,
    }),
  });

  console.log("dawdawdd");
  const data = await result.json();

  console.log(data);

  return data;
}

export async function addToCart({ id, quantity, token }) {
  let data = false;
  try {
    const result = await fetch(`${URL}/api/ingredients/add-to-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, quantity }),
    });
    data = (await result.json()).message === "success";
  } catch (err) {
    console.log(err);
  }

  return data;
}

export async function updateCart({ id, quantity, token }) {
  let data = false;
  try {
    const result = await fetch(`${URL}/api/ingredients/update-cart`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, quantity }),
    });
    data = (await result.json()).message === "success";
  } catch (err) {
    console.log(err);
  }

  return data;
}

export async function deleteCart({ id, status = "", token }) {
  let data = false;

  try {
    const result = await fetch(
      `${URL}/api/ingredients/delete-cart?status=${status}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id }),
      },
    );
    data = (await result.json()).message === "success";
  } catch (err) {
    console.log(err);
  }

  return data;
}

export async function getHistory({ token, state}) {
  let link = URL + "/api/ingredients/get-history?status=" + state;

  let query = await fetch(link, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(token);

  const data = await query.json();
  console.log(data);
  return data.shipping;
}
