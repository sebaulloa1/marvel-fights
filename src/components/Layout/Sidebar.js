import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fightsActions } from "../../store/fights-slice";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(fightsActions.clearFights());
  };
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>Marvel Fights</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active} exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={clickHandler}
              to="/fight"
              activeClassName={classes.active}
            >
              Fight
            </NavLink>
          </li>
          <li>
            <NavLink to="/rankings" activeClassName={classes.active}>
              Rankings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
