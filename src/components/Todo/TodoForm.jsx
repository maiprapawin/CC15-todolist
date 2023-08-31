import { useState } from "react";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";

import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

/*
Concept 1 - Form Handle
- ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
- FN จะถูก browser เรียกใช้ (เมื่อไหร่ ?) โดยส่ง parameter มา 1 ตัว (event object)
- โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit
- วิธีแก้ >> ต้องกำหนด type ของปุ่ม
  // 1. type = "submit" // <button type="submit">2</button>
  // 2. type = "button" // <button type="button">1</button> // ถ้าเราไม่ใส่ button มันจะถือว่าทุกปุ่มเป็น type submit
*/

/*
props = {
  textSubmit: string;
  setIsOpenForm: FN;
}
*/

///////////////////////
///////////////////////

function TodoForm(props) {
  const [isError, setIsError] = useState(true);
  const [taskInput, setTaskInput] = useState("");
  // console.log(taskInput);

  const handleChangeInput = function (event) {
    // console.log("user typing...", event.target.value);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    event.preventDefault();
    // FormValidation
    // Case 1: Submit ได้
    // Case 2: Submit ไม่ได้ => แสดง Error
  };

  const handleCancel = function () {
    // correct props name = setIsOpenForm(false)
    // incorrect props name = undefined(false) => BOOM!!
    props.setIsOpenForm(false);
  };

  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChangeInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
          {/* <button type="button" onClick={handleCancel}>
            POC
          </button> */}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
