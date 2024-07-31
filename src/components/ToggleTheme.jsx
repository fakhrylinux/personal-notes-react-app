import { ThemeConsumer } from "../contexts/ThemeContext.js";

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {([theme, toggleTheme]) => {
        return (
          <span onClick={toggleTheme} className="material-symbols-outlined">
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        );
      }}
    </ThemeConsumer>
  );
}

export default ToggleTheme;
