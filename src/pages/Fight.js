import { Fragment, useState } from "react";
import { API_KEY } from "../App";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Fight = () => {
  const [firstCharacter, setFirstCharacter] = useState({});
  const [secondCharacter, setSecondCharacter] = useState({});
  const getTotalCharacters = async () => {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`
    );
    const data = await response.json();
    return parseInt(data.data.total);
  };

  const getCharacter = async (number) => {
    const params = new URLSearchParams({
      apikey: API_KEY,
      limit: 1,
      offset: number,
    });
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/characters?` + params
    );
    const data = await response.json();
    return data.data.results[0];
  };

  const getTwoRandomCharacter = async () => {
    const totalCharacters = await getTotalCharacters();
    const firstRandomNumber = getRandomInt(0, totalCharacters);
    let secondRandomNumber = getRandomInt(0, totalCharacters);
    while (firstRandomNumber === secondRandomNumber) {
      secondRandomNumber = getRandomInt(0, totalCharacters);
    }
    const firstRandomCharacter = await getCharacter(firstRandomNumber);
    setFirstCharacter({
      id: firstRandomCharacter.id,
      name: firstRandomCharacter.name,
      imgPath: `${firstRandomCharacter.thumbnail.path}/portrait_medium.${firstRandomCharacter.thumbnail.extension}`,
      comics: firstRandomCharacter.comics.items.map((comic) => comic.name),
      events: firstRandomCharacter.events.items.map((event) => event.name),
      series: firstRandomCharacter.series.items.map((serie) => serie.name),
    });
    const secondRandomCharacter = await getCharacter(secondRandomNumber);
    setSecondCharacter({
      id: secondRandomCharacter.id,
      name: secondRandomCharacter.name,
      imgPath: `${secondRandomCharacter.thumbnail.path}/portrait_medium.${secondRandomCharacter.thumbnail.extension}`,
      comics: secondRandomCharacter.comics.items.map((comic) => comic.name),
      events: secondRandomCharacter.events.items.map((event) => event.name),
      series: secondRandomCharacter.series.items.map((serie) => serie.name),
    });

    console.log(firstRandomCharacter);
    console.log(secondRandomCharacter);
  };

  return (
    <Fragment>
      <div>Description</div>
      <div>
        <form>
          <label htmlFor="numberOfFights">Number of Fights</label>
          <input name="numberOfFights" min="1" type="number" />
          <button type="button" onClick={getTwoRandomCharacter}>
            Get hero
          </button>
        </form>
      </div>
      <div>
        <div>
          <h1>{firstCharacter.name}</h1>
          <img src={firstCharacter.imgPath} alt="" />
        </div>
        <div>
          <h1>{secondCharacter.name}</h1>
          <img src={secondCharacter.imgPath} alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Fight;
