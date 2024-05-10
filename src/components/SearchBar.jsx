import PropTypes from 'prop-types';

function SearchBar({keyword, keywordChange}) {
  return (
      <input
          id="search-note" type="text"
          value={keyword}
          placeholder="Search by title ..."
          onChange={(event) => keywordChange(event.target.value)}
      />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;