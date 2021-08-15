import classes from "./Layout.module.css";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
