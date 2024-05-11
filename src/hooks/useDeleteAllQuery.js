export function useDeleteAllQuery({ searchParams, setSearchParams }) {
  function setParam({ name, value }) {
    const page = searchParams.get("page");
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const country = searchParams.get("country");

    if (page || search || category || country) {
      searchParams.delete("page");
      searchParams.delete("search");
      searchParams.delete("category");
      searchParams.delete("country");
    }

    searchParams.set(name, value);
    setSearchParams(searchParams);
  }

  return { setParam };
}
