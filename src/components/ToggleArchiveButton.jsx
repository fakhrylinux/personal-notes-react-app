import PropTypes from "prop-types";

function ToggleArchiveButton({ id, toggleArchive, toggleInnerText }) {
  return (
    <span
      className="material-symbols-outlined"
      onClick={() => toggleArchive(id)}
    >
      {toggleInnerText}
    </span>
  );
}

ToggleArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  toggleArchive: PropTypes.func.isRequired,
  toggleInnerText: PropTypes.string.isRequired,
};

export default ToggleArchiveButton;
