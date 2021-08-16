import { useDispatch, useSelector } from "react-redux";
import { sendFightsData } from "../../store/fights-actions";
import { updateRankings } from "../../store/rankings-actions";

const FightButton = () => {
  const fights = useSelector((state) => state.fights);
  const dispatch = useDispatch();
  const fightButtonHandler = () => {
    dispatch(sendFightsData(fights));
    dispatch(updateRankings(fights));
  };

  return (
    <button onClick={fightButtonHandler} type="button">
      FIGHT!
    </button>
  );
};

export default FightButton;
