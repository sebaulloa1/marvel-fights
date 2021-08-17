const GlobalFilter = ({ filter, setFilter }) => {
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };
  return (
    <span>
      Search: {"  "}
      <input value={filter || ""} onChange={filterChangeHandler} />
    </span>
  );
};

export default GlobalFilter;
