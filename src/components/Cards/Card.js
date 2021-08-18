import { useSelector } from "react-redux";
import classes from "./Card.module.css";

const Card = (props) => {
  const rankings = useSelector((state) => state.rankings);
  const hasWon = rankings.hasChanged && props.winner;
  return (
    <div className={classes.card}>
      <div
        className={hasWon ? `${classes.name} ${classes.winner}` : classes.name}
      >
        <p>{props.name}</p>
      </div>
      <div className={classes.image}>
        <img src={props.imgPath} alt="" />
      </div>
    </div>
  );
};

export default Card;
