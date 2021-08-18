import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Cards/Card";
import FightButton from "../components/UI/FightButton";
import HomeFlexWrapper from "../components/Layout/HomeFlexWrapper";
import FightsInput from "../components/Search/FightsInput";
import Banner from "../components/UI/Banner";
import FightHolder from "../components/UI/FighHolder";
import Versus from "../components/UI/Versus";

const Fight = () => {
  const fights = useSelector((state) => state.fights);
  console.log(fights);
  return (
    <Fragment>
      <Banner />
      <div>
        Choose the number of fights for the evening. When satisfied with the
        matches, press FIGHT!
      </div>
      <FightsInput />
      <HomeFlexWrapper>
        {fights.fights.map((fight) => (
          <FightHolder key={fight.winner.id}>
            <Card
              key={fight.winner.id}
              name={fight.winner.name}
              imgPath={fight.winner.imgPath}
              winner={true}
            />
            <Versus />
            <Card
              key={fight.loser.id}
              name={fight.loser.name}
              imgPath={fight.loser.imgPath}
              winner={false}
            />
          </FightHolder>
        ))}
      </HomeFlexWrapper>
      {fights.totalFights !== 0 && <FightButton />}
    </Fragment>
  );
};

export default Fight;
