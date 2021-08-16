import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Cards/Card";
import FightButton from "../components/Layout/FightButton";
import FightsInput from "../components/Search/FightsInput";

const Fight = () => {
  const fights = useSelector((state) => state.fights);
  console.log(fights);
  return (
    <Fragment>
      <div>Description</div>
      <FightsInput />
      <div>
        {fights.fights.map((fight) => (
          <div>
            <Card
              key={fight.winner.id}
              name={fight.winner.name}
              imgPath={fight.winner.imgPath}
            />
            <Card
              key={fight.loser.id}
              name={fight.loser.name}
              imgPath={fight.loser.imgPath}
            />
          </div>
        ))}
      </div>
      <FightButton />
    </Fragment>
  );
};

export default Fight;
