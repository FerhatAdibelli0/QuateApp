import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigator = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Created By Ferhat</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add a Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigator;
