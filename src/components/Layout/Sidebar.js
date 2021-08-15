import { NavLink } from "react-router-dom";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>Marvel Fights</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/fight" activeClassName={classes.active}>
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
