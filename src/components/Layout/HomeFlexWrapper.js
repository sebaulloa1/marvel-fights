import classes from "./HomeFlexWrapper.module.css";

const HomeFlexWrapper = (props) => {
  return <div className={classes["flex-wrapper"]}>{props.children}</div>;
};

export default HomeFlexWrapper;
