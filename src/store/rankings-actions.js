import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateRankings = createAsyncThunk(
  "rankings/updateRankings",
  async (fights) => {
    const fetchRankings = async () => {
      const response = await fetch(
        "https://react-http-ab801-default-rtdb.firebaseio.com/rankings.json"
      );
      if (!response.ok) {
        throw new Error();
      }
      const fetchedRankings = await response.json();
      console.log(fetchedRankings);
      // if (fetchedRankings === null) return [];
      return fetchedRankings;
    };

    const updateData = (rankings) => {
      console.log(rankings);
      console.log(fights);
      let fetchedRankings = rankings;
      for (let fight of fights.fights) {
        const winnerCharacterIndex = fetchedRankings.findIndex(
          (character) => character.id === fight.winner
        );
        if (winnerCharacterIndex === -1) {
          fetchedRankings.push({
            id: fight.winner.id,
            name: fight.winner.name,
            wins: 1,
            totalFights: 1,
            winPercent: 100,
          });
        } else {
          fetchedRankings[winnerCharacterIndex].winPercent =
            ((fetchedRankings[winnerCharacterIndex].wins + 1) /
              (fetchedRankings[winnerCharacterIndex].totalFights + 1)) *
            100;
          fetchedRankings[winnerCharacterIndex].wins++;
          fetchedRankings[winnerCharacterIndex].totalFights++;
        }
        const loserCharacterIndex = fetchedRankings.findIndex(
          (character) => character.id === fight.loser
        );
        if (loserCharacterIndex === -1) {
          fetchedRankings.push({
            id: fight.loser.id,
            name: fight.loser.name,
            wins: 0,
            totalFights: 1,
            winPercent: 0,
          });
        } else {
          fetchedRankings[loserCharacterIndex].winPercent =
            (fetchedRankings[winnerCharacterIndex].wins /
              (fetchedRankings[winnerCharacterIndex].totalFights + 1)) *
            100;
          fetchedRankings[winnerCharacterIndex].totalFights++;
        }
      }
      return fetchedRankings;
    };

    const sendNewRankings = async (updatedRankings) => {
      const rankings = updatedRankings.sort(
        (first, second) => second.winPercent - first.winPercent
      );
      console.log(rankings);
      const response = await fetch(
        "https://react-http-ab801-default-rtdb.firebaseio.com/rankings.json",
        {
          method: "PUT",
          body: JSON.stringify(rankings),
        }
      );
      if (!response.ok) throw new Error();
    };

    let rankings = await fetchRankings();
    const newRankings = updateData(rankings);
    await sendNewRankings(newRankings);
    return newRankings;
  }
);

export const fetchTableData = createAsyncThunk(
  "rankings/fetchTableData",
  async () => {
    const response = await fetch(
      "https://react-http-ab801-default-rtdb.firebaseio.com/rankings.json"
    );
    const data = await response.json();
    return data;
  }
);
