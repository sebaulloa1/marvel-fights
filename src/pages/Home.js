import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { API_KEY } from "../App";
import CharacterCard from "../components/Cards/CharacterCard";
import HomeFlexWrapper from "../components/Layout/HomeFlexWrapper";
import HomeInput from "../components/Search/HomeInput";
import SearchResults from "../components/Search/SearchResults";

const Home = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const [searchType, setSearchType] = useState("characters");
  // const [firstOptionChecked, setFirstOptionChecked] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  // // const isMounted = useRef(false);

  // //   useEffect(() => {
  // //     if (!isMounted.current) {
  // //       isMounted.current = true;
  // //     } else {
  // //       const timer = setTimeout(() => {
  // //         fetchAutocompleteData(searchInput);
  // //         console.log("Timer" + searchInput);
  // //       }, 1000);
  // //       return () => {
  // //         clearTimeout(timer);
  // //         console.log("Cleanup");
  // //       };
  // //     }
  // //   }, [searchInput]);

  // const searchInputChangeHandler = (event) => {
  //   setSearchInput(event.target.value);
  // };

  // const radioInputChangeHandler = (event) => {
  //   console.log("Clicked");
  //   console.log(event);
  //   setSearchType(event.target.value);
  //   setFirstOptionChecked(false);
  // };

  const submitHandler = (searchInput, searchType) => {
    const params = new URLSearchParams();
    params.append("apikey", API_KEY);
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
      <HomeInput onSubmit={submitHandler} />
      <HomeFlexWrapper>
        {hasSearched &&
          results.map((result) => (
            <CharacterCard key={result.id} data={result} />
          ))}
      </HomeFlexWrapper>
      {/* {hasSearched && <SearchResults results={results} />} */}
    </Fragment>
  );
};

export default Home;
