import { useDispatch, useSelector } from "react-redux";
import { sendFightsData } from "../../store/fights-actions";
import { updateRankings } from "../../store/rankings-actions";
import { rankingsActions } from "../../store/rankings-slice";

const FightButton = () => {
  const fights = useSelector((state) => state.fights);
  const dispatch = useDispatch();
  const fightButtonHandler = () => {
    dispatch(rankingsActions.clearRankings());
    dispatch(sendFightsData(fights));
    dispatch(updateRankings(fights));
    dispatch(rankingsActions.updateFlag());
  };

  return (
    <button
      style={{ marginBottom: 20 + "px" }}
      onClick={fightButtonHandler}
      type="button"
    >
      FIGHT!
    </button>
  );
};

export default FightButton;
