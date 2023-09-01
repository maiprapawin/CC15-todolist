import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

///////////////////////////////

function TodoLists(props) {
  return (
    <ul className={styles.todo__lists}>
      {props.data.map((todoObj) => (
        <TodoItem
          key={todoObj.id}
          id={todoObj.id}
          task={todoObj.task}
          done={todoObj.status}
          date={todoObj.due_date}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
