import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_KEY } from "../../App";
import { fightsActions } from "../../store/fights-slice";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const FightsInput = () => {
  const numberInputRef = useRef();
  const dispatch = useDispatch();

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
    console.log("first random number: " + firstRandomNumber);
    let secondRandomNumber = getRandomInt(0, totalCharacters);
    console.log("second random number: " + secondRandomNumber);
    console.log(firstRandomNumber === secondRandomNumber);
    while (firstRandomNumber === secondRandomNumber) {
      secondRandomNumber = getRandomInt(0, totalCharacters);
    }
    console.log("Fetching character");
    const firstRandomCharacter = await getCharacter(firstRandomNumber);
    // setFirstCharacter({
    //   id: firstRandomCharacter.id,
    //   name: firstRandomCharacter.name,
    //   imgPath: `${firstRandomCharacter.thumbnail.path}/portrait_medium.${firstRandomCharacter.thumbnail.extension}`,
    //   comics: firstRandomCharacter.comics.items.map((comic) => comic.name),
    //   events: firstRandomCharacter.events.items.map((event) => event.name),
    //   series: firstRandomCharacter.series.items.map((serie) => serie.name),
    // });
    const secondRandomCharacter = await getCharacter(secondRandomNumber);
    // setSecondCharacter({
    //   id: firstRandomCharacter.id,
    //   name: firstRandomCharacter.name,
    //   imgPath: `${firstRandomCharacter.thumbnail.path}/portrait_medium.${firstRandomCharacter.thumbnail.extension}`,
    //   // comics: firstRandomCharacter.comics.items.map((comic) => comic.name),
    //   // events: firstRandomCharacter.events.items.map((event) => event.name),
    //   // series: firstRandomCharacter.series.items.map((serie) => serie.name),
    // });
    return [
      {
        id: firstRandomCharacter.id,
        name: firstRandomCharacter.name,
        imgPath: `${firstRandomCharacter.thumbnail.path}/portrait_medium.${firstRandomCharacter.thumbnail.extension}`,
        //   comics: secondRandomCharacter.comics.items.map((comic) => comic.name),
        //   events: secondRandomCharacter.events.items.map((event) => event.name),
        //   series: secondRandomCharacter.series.items.map((serie) => serie.name),
      },
      {
        id: secondRandomCharacter.id,
        name: secondRandomCharacter.name,
        imgPath: `${secondRandomCharacter.thumbnail.path}/portrait_medium.${secondRandomCharacter.thumbnail.extension}`,
        // comics: secondRandomCharacter.comics.items.map((comic) => comic.name),
        // events: secondRandomCharacter.events.items.map((event) => event.name),
        // series: secondRandomCharacter.series.items.map((serie) => serie.name),
      },
    ];
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Working");
    dispatch(fightsActions.clearFights());
    const numberOfFights = numberInputRef.current.value;
    let fights = [];
    for (let i = 0; i < numberOfFights; i++) {
      let randomCharacters = await getTwoRandomCharacter();
      let winner = randomCharacters[0];
      let loser = randomCharacters[1];
      if (randomCharacters[1].id > randomCharacters[0].id) {
        winner = randomCharacters[1];
        loser = randomCharacters[0];
      }
      fights.push({
        //characters: [randomCharacters[0], randomCharacters[1]],
        winner: winner,
        loser: loser,
      });
    }
    console.log(fights);
    // let winner = fights.characters[0].id;
    // if (fights.characters[1].id > fights.characters[0].id) {
    //   winner = fights.characters[1].id;
    // }

    dispatch(
      fightsActions.addFight({
        fights: fights,
        numberOfFights: numberOfFights,
        date: new Date().toISOString().split("T")[0],
      })
    );
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="numberOfFights">Number of Fights</label>
        <input
          ref={numberInputRef}
          name="numberOfFights"
          min="1"
          type="number"
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
};

export default FightsInput;
