import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.scss';

function Search() {
  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input type='text' placeholder='search' className={styles.search__input} />
    </div>
  );
}

export default Search;
