import { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigator from "./MainNavigator";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigator />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
