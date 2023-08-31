import styles from './TodoLists.module.scss';
import { FaTrashAlt, FaPen } from 'react-icons/fa';
import { HiOutlineCheck } from 'react-icons/hi';

function TodoLists() {
  return (
    <ul className={styles.todo__lists}>
      <li className={styles.todo}>
        <div className={styles.todo__checkbox}>
          <HiOutlineCheck className={styles.todo__checkbox__icon} />
        </div>
        <p className={styles.todo__task}>todo-item 1 </p>
        <span className={styles.todo__date}>30 Aug</span>
        <div className={styles.todo__action}>
          <span>
            <FaPen className={styles.todo__edit} />
          </span>
          <span>
            <FaTrashAlt className={styles.todo__delete} />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;
