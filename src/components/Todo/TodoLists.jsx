import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoLists.module.scss";

///////////////////////////////

function TodoLists() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = function () {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <ul className={styles.todo__lists}>
      {isOpenForm ? (
        <TodoForm />
      ) : (
        <li className={styles.todo}>
          <div
            className={`${styles.todo__checkbox} ${styles.todo__checkbox__done}`}
          >
            <HiOutlineCheck className={styles.todo__checkbox__icon} />
          </div>
          <p className={`${styles.todo__task} ${styles.todo__task__done}`}>
            todo-item 1
          </p>
          <span className={styles.todo__date}>30 Aug</span>
          <div className={styles.todo__action}>
            <span onClick={handleClick}>
              <FaPen className={styles.todo__edit} />
            </span>
            <span>
              <FaTrashAlt className={styles.todo__delete} />
            </span>
          </div>
        </li>
      )}
    </ul>
  );
}

export default TodoLists;
