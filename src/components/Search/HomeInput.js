import { useState } from "react";
import { classes } from "./HomeInput.module.css";

const HomeInput = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("characters");
  const [firstOptionChecked, setFirstOptionChecked] = useState(true);

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const radioInputChangeHandler = (event) => {
    setSearchType(event.target.value);
    setFirstOptionChecked(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(searchInput, searchType);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search</label>
        <input
          name="search"
          type="text"
          onChange={inputChangeHandler}
          value={searchInput}
        />
        <input
          type="radio"
          id="characters"
          name="option"
          value="characters"
          onChange={radioInputChangeHandler}
          checked={firstOptionChecked}
        />
        <label htmlFor="characters">characters</label>
        <input
          type="radio"
          id="comics"
          name="option"
          value="comics"
          onChange={radioInputChangeHandler}
        />
        <label htmlFor="comics">comics</label>
        <input
          type="radio"
          id="series"
          name="option"
          value="series"
          onChange={radioInputChangeHandler}
        />
        <label htmlFor="series">Series</label>
        <input
          type="radio"
          id="events"
          name="option"
          value="events"
          onChange={radioInputChangeHandler}
        />
        <label htmlFor="events">Events</label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomeInput;
