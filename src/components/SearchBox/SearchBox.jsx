import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';


function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name:
        <input type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
}

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
