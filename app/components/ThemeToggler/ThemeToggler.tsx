import { FunctionComponent } from "react";
import classes from "./ThemeToggler.module.scss";

interface ThemeTogglerProps {
  theme: string;
  setTheme: (value: string) => void;
}

const ThemeToggler: FunctionComponent<ThemeTogglerProps> = ({
  theme,
  setTheme,
}) => {
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <label className={classes.switch__button} htmlFor="switch">
      <div className={classes.switch__outer}>
        <input id="switch" type="checkbox" onChange={themeHandler} />
        <div className={classes.button}>
          <span className={classes.button__toggle}></span>
          <span className={classes.button__indicator}></span>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggler;
