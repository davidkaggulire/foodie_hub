import { Fragment } from "react";
import classes from "./Header.module.css";
import foodImage from "../../assets/pizza.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.top_bar}>
        <h3 className={classes.app_name}>Foodie Hub</h3>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
          <img src={foodImage}/>
      </div>
    </Fragment>
  );
};

export default Header;
