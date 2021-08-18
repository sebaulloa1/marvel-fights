import classes from "./RankingsTable.module.css";

const GlobalFilter = ({ filter, setFilter }) => {
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className={classes.filter}>
      <span>
        Search: {"  "}
        <input value={filter || ""} onChange={filterChangeHandler} />
      </span>
    </div>
  );
};

export default GlobalFilter;
