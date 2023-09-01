// Dependencies
import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import "./App.scss";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";

//////////////////////////////////////////////////

const data = [
  {
    id: nanoid(),
    task: "Suspendisse potenti.",
    status: false,
    due_date: "2023-04-26",
  },
  {
    id: nanoid(),
    task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    status: false,
    due_date: "2023-05-08",
  },
  {
    id: nanoid(),
    task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    status: false,
    due_date: "2023-04-30",
  },
];

function App() {
  const [allTodos, setAllTodos] = useState(data);

  // รวม Logics ต่างๆไว้ใน App แล้วค่อยส่งไปให้ลูกๆใช้
  const addTodo = function (taskName) {
    const newTodo = {
      id: nanoid(),
      task: taskName,
      status: false,
      due_date: dayjs().format("YYYY-MM-DD"),
    };
    setAllTodos((p) => [newTodo, ...p]);
  };

  const deleteTodo = function (todoId) {
    ///// Practice 1 /////
    // let foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
    // if (foundIndex !== -1) {
    //   const newTodoLists = [...allTodos];
    //   newTodoLists.splice(foundIndex, 1);
    //   setAllTodos(newTodoLists);
    // }

    ///// Practice 2 /////
    // const newTodoLists = allTodos.filter((todo) => todo.id !== todoId);
    // setAllTodos(newTodoLists);

    ///// Practice 3 /////
    setAllTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const editTodo = function (todoId, updateTodoObj) {
    ///// Practice #1 /////
    // let foundTodo = allTodos.find((todo) => todo.id === todoId);
    // if (!foundTodo) return; // => function นี้จะไม่แก้ไขอะไร

    // const newTodo = Object.assign({}, foundTodo, newTodoObj); // ถ้ามีของซ้ำกันมันจะเอาตัวที่อยู่ขวาสุดมาทับฝั่งซ้าย

    // let foundIndex = allTodos.findIndex((todo) => todo.id === todoId);
    // if (foundIndex === -1) return;

    // const newTodoLists = [...allTodos];
    // newTodoLists.splice(foundIndex, 1, newTodo); // ลบ 1 ตัวแล้วเพิ่ม newTodo เข้าไป = เอา todo เก่าออกไปแล้วใส่อันใหม่เข้าไปแทน
    // setAllTodos(newTodoLists);

    ///// Practice #2 /////
    // const newTodoLists = allTodos.map(function (todo) {
    //   if (todo.id !== todoId) return todo;
    //   else return { ...todo, ...newTodoObj };
    // });
    // setAllTodos(newTodoLists);

    ///// Practice #3 /////
    const newTodoLists = allTodos.reduce((acc, todo) => {
      if (todo.id !== todoId) acc.push(todo);
      else acc.push({ ...todo, ...updateTodoObj });
      return acc;
    }, []); // รอบแรกเริ่มที่ array เปล่า
    setAllTodos(newTodoLists);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate addTodo={addTodo} />
          <TodoLists
            data={allTodos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
