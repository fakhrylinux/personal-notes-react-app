import PropTypes from 'prop-types';

function DeleteButton({id, onDelete}) {
  return (
      <span
          className="material-symbols-outlined"
          onClick={() => onDelete(id)}
      >
        delete
      </span>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;