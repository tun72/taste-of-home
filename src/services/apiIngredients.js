import axios from "axios";
import { useToken as getToken } from "../hooks/useToken";
import { URL } from "../utils/constants";

const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export async function getIngredients({ page, search, category }) {
  let link = URL + "/api/ingredients?page=" + page;
  if (search) link = link + "&search=" + search;

  if (category)
    link = link + "&category=" + (category === "all" ? "" : category);

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

  return ["all", ...data.category];
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

  const data = await result.json();

  return data;
}

// THIS PLACE BELONG TO CART

// GET CART
export async function fetchCartApi() {
  let data = [];
  const { token } = await getToken();
  const res = await axios.get(`${URL}/api/ingredients/cart`, getHeader(token));
  if (res.status !== 200) throw new Error("Something went Wrong 💥");
  data = await res.data;
  return data;
}

export async function addToCart({ id, quantity }) {
  const { token } = await getToken();
  const res = await axios.post(
    `${URL}/api/ingredients/add-to-cart`,
    {
      id,
      quantity,
    },
    getHeader(token),
  );
  if (res.status !== 200) throw new Error("Something went Wrong 💥");
  const data = await res.data;
  return data.cart;
}

export async function updateCart({ id, quantity }) {
  const { token } = await getToken();
  const res = await axios.patch(
    `${URL}/api/ingredients/update-cart`,
    {
      id,
      quantity,
    },
    getHeader(token),
  );
  if (res.status !== 200)
    throw new Error("Increaseing item wrong " + res.status + " got 💥");
  return id;
}

export async function deleteCart(id = "") {
  const { token } = await getToken();
  const res = await axios.delete(
    `${URL}/api/ingredients/delete-cart?id=${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  if (res.status !== 200)
    throw new Error("Deleting item wrong " + res.status + " got 💥");
  return id || true;
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

  const data = await query.json();

  return data.shipping;
}
