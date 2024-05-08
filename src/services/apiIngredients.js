import axios from "axios";
import { useToken as getToken } from "../hooks/useToken";
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

// THIS PLACE BELONG TO CART
export async function fetchCartApi() {
  let data = [];
  const { token } = await getToken();
  try {
    const result = await fetch(`${URL}/api/ingredients/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    data = await result.json();
  } catch (err) {
    console.log(err);
  }
  return data;
}

export async function addToCart({ id, quantity }) {
  let data = [];
  const { token } = await getToken();
  try {
    // const result = await fetch(`${URL}/api/ingredients/add-to-cart`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${token}`,
    //   },
    //   body: JSON.stringify({ id, quantity }),
    // });

    const res = await axios.post(
      `${URL}/api/ingredients/add-to-cart`,
      { id, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (res.status !== 200) return null;

    data = await res.data;
    return data.cart;
  } catch (err) {
    console.log(err);
  }

  return data;
}

export async function updateCart({ id, quantity }) {
  const { token } = await getToken();
  try {
    const res = await fetch(`${URL}/api/ingredients/update-cart`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id, quantity }),
    });
    console.log(res);
    if (!res.ok)
      throw new Error("Increaseing item wrong " + res.status + " got 💥");
    return id;
  } catch (err) {
    console.log(err);
  }

  return null;
}

export async function deleteCart(id = "") {
  const { token } = await getToken();
  try {
    // const res = await fetch(
    //   `${URL}/api/ingredients/delete-cart/?id=${id}`,
    //   {
    //     method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   },
    // );
    const res = await axios.delete(
      `${URL}/api/ingredients/delete-cart?id=${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (res.status !== 200)
      throw new Error("Increaseing item wrong " + res.status + " got 💥");
    return id || true;
  } catch (err) {
    console.log(err);
  }
  return null;
}

export async function getHistory({ token, state }) {
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
