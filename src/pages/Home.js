import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { API_KEY } from "../App";
import CharacterCard from "../components/Cards/CharacterCard";
import HomeFlexWrapper from "../components/Layout/HomeFlexWrapper";
import CharacterModal from "../components/Search/CharacterModal";
import HomeInput from "../components/Search/HomeInput";
import SearchResults from "../components/Search/SearchResults";
import Banner from "../components/UI/Banner";

const Home = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    path: "",
    name: "",
    type: "",
    id: "",
  });

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

  const showModalHandler = (path, name, type) => {
    setShowModal(true);
    setModalData({
      path,
      name,
      type,
    });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <Banner />
      <HomeInput onSubmit={submitHandler} />
      <HomeFlexWrapper>
        {hasSearched &&
          results.map((result) => (
            <CharacterCard
              key={result.id}
              onShowModal={showModalHandler}
              data={result}
            />
          ))}
        {hasSearched && showModal && (
          <CharacterModal data={modalData} onClose={closeModalHandler} />
        )}
      </HomeFlexWrapper>
      {/* {hasSearched && <SearchResults results={results} />} */}
    </Fragment>
  );
};

export default Home;
