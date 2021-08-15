import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Fragment } from "react";
import SearchResults from "../components/search/SearchResults";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState("characters");
  const [firstOptionChecked, setFirstOptionChecked] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  // const isMounted = useRef(false);

  //   useEffect(() => {
  //     if (!isMounted.current) {
  //       isMounted.current = true;
  //     } else {
  //       const timer = setTimeout(() => {
  //         fetchAutocompleteData(searchInput);
  //         console.log("Timer" + searchInput);
  //       }, 1000);
  //       return () => {
  //         clearTimeout(timer);
  //         console.log("Cleanup");
  //       };
  //     }
  //   }, [searchInput]);

  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const radioInputChangeHandler = (event) => {
    console.log("Clicked");
    console.log(event);
    setSearchType(event.target.value);
    setFirstOptionChecked(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);
    const params = new URLSearchParams();
    params.append("apikey", "80727d5bf08d5acb7187fa7a3a48a957");
    if (searchType === "characters" || searchType === "events") {
      params.append("nameStartsWith", searchInput);
    } else {
      params.append("titleStartsWith", searchInput);
    }
    const fetchData = async () => {
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/${searchType}?` + params
      );
      const data = await response.json();
      console.log(data);
      setResults(data.data.results);
      setHasSearched(true);
    };
    fetchData();
  };

  return (
    <Fragment>
      <div>
        <div>MARVEL FIGHTS</div>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="search">Search</label>
          <input
            name="search"
            type="text"
            onChange={searchInputChangeHandler}
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
      {hasSearched && <SearchResults results={results} />}
    </Fragment>
  );
};

export default Home;
