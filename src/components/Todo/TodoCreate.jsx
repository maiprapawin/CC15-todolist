import styles from './TodoCreate.module.scss';
import { FaPlus } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';

function TodoCreate() {
  return (
    <div className={styles.todo__create}>
      <div className={styles.todo__create__button}>
        <HiPlus />
      </div>
      <h3 className={styles.todo__create__text}>Add Task</h3>
    </div>
  );
}

export default TodoCreate;
