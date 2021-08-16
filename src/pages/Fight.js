import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Cards/Card";
import SearchInput from "../components/Search/SearchInput";

const Fight = () => {
  const fights = useSelector((state) => state.fights);
  console.log(fights);
  return (
    <Fragment>
      <div>Description</div>
      <SearchInput />
      <div>
        {fights.fights.map((fight) => (
          <div>
            <Card
              key={fight.characters[0].id}
              name={fight.characters[0].name}
              imgPath={fight.characters[0].imgPath}
            />
            <Card
              key={fight.characters[1].id}
              name={fight.characters[1].name}
              imgPath={fight.characters[1].imgPath}
            />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Fight;
