import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext.js";
import ToggleTheme from "./ToggleTheme.jsx";

function Navigation({ logout, name }) {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <header className="head_bar">
      <nav className="topnav">
        <Link to="/">
          <h1 className="head_bar__title">Notes App</h1>
        </Link>
        <ul id="links">
          <li>
            <Link to="/notes/new">
              {locale === "id" ? "Tambah Catatan" : "Add Note"}
            </Link>
          </li>
          <li>
            <Link to="/archive">{locale === "id" ? "Arsip" : "Archive"}</Link>
          </li>
          <li>
            <a
              type="button"
              onClick={toggleLocale}
              style={{ cursor: "pointer" }}
            >
              {locale === "id" ? "English" : "Indonesia"}
            </a>
          </li>
        </ul>
        <a id="mobile-menu" className="icon">
          <i className="fa fa-bars"></i>
        </a>
        <div className="profile">
          <ToggleTheme />
          {name}
          <span
            className="material-symbols-outlined btn-logout"
            onClick={logout}
          >
            logout
          </span>
        </div>
      </nav>
    </header>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
