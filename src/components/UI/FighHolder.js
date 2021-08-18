import classes from "./FightHolder.module.css";

const FightHolder = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default FightHolder;
