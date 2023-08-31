// Library คนอื่น
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

// Library เราเอง
import TodoForm from "./TodoForm"; // ไม่ต้องเติม .js/.jsx ก็ได้
import styles from "./TodoCreate.module.scss";

/////////////////////////////////////////////////////////////////////////////////////////////

/*
Concept 1 >> Condition Rendering
- Default Mode: Show Button & Text
- Active Mode: Show TodoForm

  Concept: true ? <AddTask /> : <TodoForm />

/////////////////////////////////////////////////

Concept 2 >> Event Handling
- เอาฟังก์ชั่นไปผูกติดกับ UI เพื่อให้ user เป็นคนเรียกใช้ฟังก์ชั่นเอง
- onClick: ต้อง click ก่อน, FN ถึงจะรัน
    - User ทำการคลิก
    - Browser จะเป็นคนเรียกใช้ฟังก์ชั่น โดยส่ง parameter มาให้ 1 ตัว เป็น event obj
      handleClick(eventObject)

/////////////////////////////////////////////////

Concept 3 >> JS Value ไม่สามารถทำให้ React rerender ได้
เราเลยต้องใช้ State

/////////////////////////////////////////////////

Concept 4 >> Array Destructuring
function myUseState() {
  return [5,9]
}
let [a,b] = myUseState()
a === 5
b === 9

/////////////////////////////////////////////////

Concept 5 >> React State (ก็คือเหมือน array destructuring)
- เป็น 1 ใน fn ของกลุ่ม React Hook
  const [state, setState] = useState(initialState: any)
  // element 1 : current State
  // element 2 : Fn สำหรับ setState
  // เมื่อ State เปลี่ยน Function Component จะ Rerender
  // Rerender == Code ทั้งหมดใน FC จะถูกรันใหม่อีกครั้งหนึ่ง
*/

/////////////////////////////////////////////////////////////////////////////////////////////

// #1 : FC = Function Component
function TodoCreate() {
  // HOOK FN
  const [isOpenForm, setIsOpenForm] = useState(false);

  // #2 : JS Function (Logic)
  const handleClick = function (event) {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm />
      ) : (
        <div className={styles.todo__create} onClick={handleClick}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
