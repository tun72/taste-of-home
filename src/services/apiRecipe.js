export async function getReciepe() {
  console.log("Hello");
  const link = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  const request = await fetch(link);
  const data = await request.json();
  console.log(data);
  return data;
}


export async function getCountry() {
  console.log("sdhdhajwdhjwahd");
  const link = "https://restcountries.com/v3.1/all?fields=name,flags,demonyms";
  const request = await fetch(link);
  const data = await request.json();
  console.log(data);
  return data;
}

