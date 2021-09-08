const SearchForm = ({ handleFilter }) => {
  return (
    <form
      className="w-2/4 mt-12 mx-auto"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="shadow-md rounded-2xl bg-gray-200 focus:outline-none focus:bg-green-50 py-3 px-5 w-full"
        type="search"
        placeholder="Search"
        onChange={(event) => handleFilter(event.target.value)}
      />
    </form>
  );
};

export default SearchForm;
