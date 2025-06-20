export async function getReciepes({ country, category, search }) {
  let link = null;
  if (country)
    link = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`;
  else if (category)
    link = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  else if (search)
    link = `https://www.themealdb.com/api/json/v1/1/filter.php?s=${search}`;

  if (!link) return null;

  const request = await fetch(link);
  const data = await request.json();

  return data?.meals ?? [];
}

export async function getCategory() {
  const link = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  const request = await fetch(link);
  const data = await request.json();
  return data.meals;
}

export async function getRecipeDetail(id) {
  const link = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;
  const request = await fetch(link);

  const data = await request.json();
  return data.meals;
}

export async function getCountry() {
  const url1 = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const url2 = "https://restcountries.com/v3.1/all?fields=name,flags,demonyms";
  const response = await Promise.all([fetch(url1), fetch(url2)]);

  if (response.map((res) => res.ok !== true).includes(true)) {
    throw new Error("ERROR");
  }
  const data1 = await response[0].json();
  const data2 = await response[1].json();
  const country = await data1.meals.map((meal) =>
    data2.find((data) => data.demonyms.eng.f === meal.strArea),
  );

  return country ?? null;
}
