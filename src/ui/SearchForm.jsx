function SearchForm() {
  return (
    <div class="search__bar align-items-center">
      <form action="" class="search">
        <input type="text" class="search--input" placeholder="Search" />
        <button class="search--btn">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <button class="btn-sort">
        <i class="fas fa-sort-alpha-down"></i>
      </button>
    </div>
  );
}

export default SearchForm;
