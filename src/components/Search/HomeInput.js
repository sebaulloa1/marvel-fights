import { useState } from "react";
import classes from "./HomeInput.module.css";

const HomeInput = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("characters");
  const [firstOptionChecked, setFirstOptionChecked] = useState(true);
  //let firstOptionChecked = true;

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const radioInputChangeHandler = (event) => {
    // if (searchType === "characters") {
    //   setFirstOptionChecked(true);
    // } else {
    setFirstOptionChecked(false);
    // }
    // firstOptionChecked = false;
    setSearchType(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(searchInput, searchType);
  };

  return (
    <div className={classes["form-container"]}>
      <form onSubmit={submitHandler}>
        {/* <label htmlFor="search">Search</label> */}
        <input
          name="search"
          type="text"
          onChange={inputChangeHandler}
          value={searchInput}
          placeholder="Type here"
        />
        <div className={classes.actions}>
          <div className={classes["radio-toolbar"]}>
            <input
              type="radio"
              id="characters"
              name="option"
              value="characters"
              onChange={radioInputChangeHandler}
              className={firstOptionChecked ? classes["first-check"] : ""}
            />
            <label htmlFor="characters">characters</label>
            <input
              type="radio"
              id="comics"
              name="option"
              value="comics"
              onChange={radioInputChangeHandler}
              disabled
            />
            <label htmlFor="comics">comics</label>
            <input
              type="radio"
              id="series"
              name="option"
              value="series"
              onChange={radioInputChangeHandler}
              disabled
            />
            <label htmlFor="series">series</label>
            <input
              type="radio"
              id="events"
              name="option"
              value="events"
              onChange={radioInputChangeHandler}
              disabled
            />
            <label htmlFor="events">events</label>
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default HomeInput;
