# 0 Setup Project

npx create-react-app <project-name>
cd <project-name>
npm start or npm run start or npx react-scripts start
auto open browser localhost:3000

# 1 About Project

Other code เรียกว่า Dependencies อยู่ใน node_modules

ลบทิ้งได้
ติดตั้งใหม่ด้วย npm install จะทำการติดตั้ง dependencies ที่อยู่ใน package.json ให้อัตโนมัติ
Code เราเอง อยู่ใน src/

# 2 : Clean up Project - remove unnecessary thing

clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/

# 3 : CSS setup

3.1 : ติดตั้ง scss
ติดตั้ง sass เพื่อช่วยให้การเขียน CSS แบบ BEM สะดวกมากขึ้น
รันคำสั่ง npm install sass ลงใน terminal (อย่าลืม check path ว่าอยู่ที่ root project แล้ว : ตำแหน่งที่มี file package.json)
ตรวจสอบ dependencies ในไฟล์ package.json ว่ามี sass แล้ว

3.2 : setup index.scss
ไฟล์ index.css : ให้แปลงนามสกุลไฟล์ เป็น index.scss
ไฟล์ index.js : เปลี่ยนการ import จาก index.css เป็น index.scss

3.3 : CSS Global Reset
ไฟล์ index.scss : เขียน css rule เพื่อลบ default padding,margin ต่างๆ รวมถึงวิธีการวัดขนาดของ Box-model
_,
_::after,
\*::before {
margin: 0;
padding: 0;
box-sizing: inherit;
}

html {
font-size: 62.5%; /_equal font-size : 10px_/
}

body {
box-sizing: border-box;
}

3.4 : Typography
ไฟล์ index.scss : ให้ทำการ import google font
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&family=Source+Sans+Pro:wght@400;600;700&display=swap');
ไฟล์ index.scss : ทำการเพิ่ม font หลักของ application (Nunito) ลงใน tag body
body {
font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

3.5 : Color
knowledge : scss มีความสามารถในการสร้างตัวแปรไว้ใช้ได้
ไฟล์ index.scss : สร้างตัวแปรสำหรับเก็บสีหลักๆของ web-application
$primary: #db4c3f;
$grey-light: #eaeaea;
$grey-dark: #808080
$white: #fff;

# 4 : App Layout (or Page layout)

วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
ในไฟล์ App.js วาง markup สำหรับทำ layout

   <div className='todo'>
        <div className="todo__header">Header</div>
        <div className="todo__sidebar">SideBar</div>
        <div classNAme="todo_content">TodoContent</div>
    </div>
สร้างไฟล์ App.scss
ไฟล์ App.scss : เขียน css สำหรับจัด layout
$header-height: 44px;
$sidebar-width: 300px;

.todo {
display: grid;
grid-template-rows: $header-height calc(100vh - $header-height);
grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

&\_\_header {
grid-column: 1/3;
grid-row: 1/2;
}

&\_\_sidebar {
grid-row: 2/3;
grid-column: 1/2;
// position: sticky;
}

&\_\_content {
grid-row: 2/3;
grid-column: 2/3;

    // other css
    overflow-y: scroll;
    padding: 20px 30px;
    padding-top: 0;

}
}
ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx
import styles from 'App.module.scss';

<div className={styles.todo}>
  <div className={styles.todo__header}>Header</div>
  <div className={styles.todo__sidebar}>SideBar</div>
  <div classNAme={styles.todo__content}>TodoContent</div>
</div>;

# 5.1 : AppBar or HeaderComponent

ติดตั้ง library สำหรับทำ icon : npm install react-icons link to npm ,link to document

สร้างไฟล์ Header.jsx สำหรับทำ Header

<header className='header'>
  {/* Logo */}
  <div className='header__logo'></div>

{/_ Text _/}

  <div className='header__text'>
    <h3>Todoist</h3>
  </div>

{/_ Search _/}

  <div className='header__search'></div>
</header>
สร้างไฟล์ Header.module.scss สำหรับ css
// import global.scss
.header {
  background-color: $primary;
  color: $grey-light;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 20px;

&\_\_logo {
display: flex;
cursor: pointer;
font-size: 24px;
}

&**text {
flex: 1;
}
&**search {
min-width: 300px;
}
}
import styles มาใช้ใน JSX
implement styles กับ className
import styles from './Header.module.scss';

// implement styles กับ className

5.1.1 : Logo
แทรก Logo Home ลงใน container
import { FaHome } from 'react-icons/fa';
// add this code in return statement

<div className='header__logo'>
  <FaHome />
</div>

5.1.2 : Search
สร้างไฟล์ Search.jsx
สร้างไฟล์ Search.module.scss
import { FaSearch } from 'react-icons/fa';

<div className='search'>
  <span className='search__icon'>
    <FaSearch />
  </span>
  <input type='text' className='search__input' placeholder='search' />
</div>;
// import global.scss
.search {
  position: relative;
  border-radius: 4px;

// magnify-icon
&\_\_icon {
// position
position: absolute;
left: 5px;
top: 50%;
transform: translateY(-50%);

    // decorate
    font-size: 1.6rem;
    font-weight: 200;
    color: grey;

    // control-child
    display: flex;

}

&\_\_input {
width: 100%;
padding: 5px;
padding-left: 30px;
border-radius: 5px;
border: 1px solid $grey-light;
font-size: 1.6rem;
outline: none;
color: $grey-dark;
}
}

# 5.2 : SideBar

5.2.1 : สร้าง Sidebar
สร้างไฟล์ Sidebar.jsx

<aside className='sidebar'>
  <section className='sidebar_category'>{/* for generic list*/}</section>
  <section className='sidebar_category'>{/* for project list*/}</section>
</aside>
.sidebar {
  position: sticky;

// control-child
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px 30px;
}

5.2.2 : Generic List
children แรก ของ .sidebar_category

<ul className='list'>
  <li className='list__item'>
    <span className='list__icon'>
      <FaInbox />
    </span>
    <h6 className='list__text'>Inbox</h6>
  </li>
  <li className='list__item'>
    <span className='list__title'>
      <FaCalendar />
    </span>
    <h6 className='list__title'>Today</h6>
  </li>
  <li className='list__item'>
    <span className='list__icon'>
      <FaCalendarAlt />
    </span>
    <h6 className='list__title'>Next 7 Days</h6>
  </li>
</ul>
// overide ใน global
li {
  list-style: none;
}

// ใน module.scss

.list {
display: flex;
flex-direction: column;
gap: 5px;

&\_\_item {
display: flex;
align-items: center;
gap: 15px;
font-size: 20px;
cursor: pointer;
padding: 10px;
border-radius: 4px;

    &:hover {
      background-color: $grey-dark;
    }

}

&\_\_icon {
display: flex;
}

&\_\_title {
font-weight: 500;
}
}
Challenge-1 : Refactor <li></li> เป็น ListItem Component
// Before Refator

<li className='list__item'>
    <span className='list__icon'>
        <FaInbox />
    </span>
    <h6 className='list__text'>Inbox</h6>
</li>

// After Refactor
<ListItem  /> // with some props
Challenge-2 : Refactor <ul></ul> เป็น Lists Component
// Before Refactor

<ul className='list'>
    <ListItem  /> // with some props
    <ListItem  /> // with some props
    <ListItem  /> // with some props
</ul>

// After Refactor (Sol A)
<Lists /> // with some props

// After Refactor (Sol B)
<Lists>
<ListItem  /> // with some props
<ListItem  /> // with some props
<ListItem  /> // with some props
</Lists>
5.2.3 : Project List
children ที่สอง ของ .sidebar_category

<div className='accordion'>
  <div className='accordion__header'>
    <span className='accordion__header__icon'>
      <FaChevronDown />
    </span>
    <h6 className='accordion__header__title'>Projects</h6>
  </div>
  <div className='accordion__content'>
    <ul className='list'>
      <li className='list__item'>
        <span className='list__icon'>
          <FaInbox />
        </span>
        <h6 className='list__title'>Project-A</h6>
      </li>
      <li className='list__item'>
        <span className='list__icon'>
          <FaInbox />
        </span>
        <h6 className='list__title'>Project-B</h6>
      </li>
    </ul>
  </div>
</div>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;

&\_\_header {
display: flex;
align-items: center;
gap: 10px;
font-size: 20px;

    &__icon {
      display: flex;
    }
    &__title {
      font-size: 1rem;
    }

}

&\_\_content {
// using css of lists
}
}
challenge : refactor to <Accordion/>
Tip : Reuse component

# 6 : TodoContent

สร้างไฟล์ TodoContent

<main className={styles.todo__container}>
  {/* for Header */}
  {/* for Create */}
  {/* for Lists */}
</main>
.todo_container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

# 7 : Todo-header

สร้างไฟล์ TodoHeader.jsx
เพิ่ม markup และ implement css module
นำ TodoHeader ไป render ใน TodoContent
export function TodoHeader() {
let today = new Date();
let options = { weekday: 'short', day: 'numeric', month: 'short' };

return (
<div className={styles.header}>
<h1 className={styles.header__text}>Inbox</h1>
<span className={styles.header__date}>{today.toLocaleDateString('en-US', options)}</span>
</div>
);
}
.header {
display: flex;
gap: 10px;
align-items: baseline;

&**text {
font-size: 2.4rem;
}
&**date {
font-size: 1.2rem;
color: $grey-dark;
}
}

# 8 : CreateTodo

<div className='create__todo'>
  <span className='create__todo__icon'>+</span>
  <h3 className='create__todo__text'>Add task</h3>
</div>
.create__todo {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  padding: 10px;

&\_\_icon {
font-size: 2.4rem;
line-height: 2.2rem;
text-align: center;
border-radius: 50%;
width: 24px;
height: 24px;

    &:hover {
      background-color: $primary;
      color: white;
    }

}

&\_\_text {
color: grey;
font-weight: 500;
font-size: 1.6rem;
line-height: 1.2rem;

    &:hover {
      color: $primary;
    }

}
}

# 9 : TodoForm

<form className='todo__form__container'>
  <input className='todo__form__input' placeholder='Task Name' />
  <div className='todo__form__footer'>
    <p className='todo__error'>Title is required</p>
    <div className='todo__form__buttons'>
      <button>Cancel</button>
      <button>Add Task</button>
    </div>
  </div>
</form>
.todo__form__container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 10px;
  border: 1px solid $grey-light;
}

.todo**form**input {
border: none;
border-radius: 4px;
padding: 10px 10px;
width: 100%;
font-size: 1.4rem;

&:focus {
outline: none;
}
}

.todo**form**footer {
display: flex;
justify-content: space-between;
align-items: center;
}

.todo**error {
justify-self: start;
padding: 10px;
font-size: 10px;
font-weight: 800;
color: $primary;
}
.todo**form\_\_buttons {
display: flex;
justify-content: flex-end;
gap: 10px;
flex: 1;

& > button {
border: none;
padding: 8px;
border-radius: 3px;
cursor: pointer;
}

& > button:last-child {
background-color: $primary;
color: $white;
}
}

# 10 : Condition Render CreateTodo with TodoForm

WARNING : AFTER THIS STEP, PLS STICK WITH INSTRUCTOR

# 11 : TodoItem

<li className='todo'>
  <div className='todo__checkbox'>
    <HiCheck className='todo__checkbox__icon' />
  </div>
  <p className='todo__task done'>item-1</p>

  <div className='todo_edit'>
    <HiPencil className='todo_edit__icon' />
  </div>

  <div className='todo_delete'>
    <HiTrash className='todo_delete__icon' />
  </div>
</li>
.todo {
  cursor: pointer;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;

&:hover {
background-color: $grey-light;
}

&\_\_checkbox {
color: $grey-dark;
height: 16px;
width: 16px;
display: block;
border: 1px solid $grey-dark;
border-radius: 16px;
text-align: center;
line-height: 16px;

    &__icon {
      display: none;
      font-size: 1.2rem;
    }

    &__icon__done {
      display: inline;
      font-size: 12px;
    }

}

&\_\_task {
flex: 1;
}

&**edit,
&**delete {
color: gray;
display: flex;
align-items: center;
font-size: 1.9rem;

    &:hover {
      color: $grey-dark;
    }

}
}

.done {
text-decoration: line-through;
}

// effect ติ้กถูกตอน hover ที่ <li>
// .checkbox**container:hover {
// .checkbox**icon {
// display: inline;
// }
// }

# 12 : เอา TodoForm ไป toggle กับ TodoCreate

# 13 : ทำ TodoList

// TodoLists.jsx
import styles from './TodoLists.module.scss';
import mockTodo from '../../data/todo.json';
import { TodoItem } from './TodoItem';

export function TodoLists() {
return (
<ul className={styles.todoList}>
{mockTodo.map((item) => (
<TodoItem item={item} key={item.id} />
))}
</ul>
);
}
// TodoItem
import styles from './TodoItem.module.scss';

import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoItem({ item }) {
const [isEdit, setIsEdit] = useState(false);

const handleClickEdit = () => setIsEdit(true);
const onClickConfirm = () => {
setIsEdit(false);
};
const onClickCancel = () => {
setIsEdit(false);
};

return (
<>
{!isEdit ? (
<li className={styles.todo__item__container} key={item.id}>
<div className={styles.checkbox__container}>
<HiCheck
className={`${item.status ? styles.checkbox__icon__done : styles.checkbox__icon}`}
/>
</div>
<p className={`${item.status && styles.done}`}>{item.task}</p>

          <div className={styles.edit__icon} onClick={handleClickEdit}>
            <HiPencil />
          </div>

          <div className={styles.delete__icon}>
            <HiTrash />
          </div>
        </li>
      ) : (
        <TodoForm
          task={item.task}
          textConfirm='Edit task'
          onclickConfirm={onClickConfirm}
          onClickCancel={onClickCancel}
        />
      )}
    </>

);
}

# 14.Button

import styles from './Button.module.scss';

export function Button({ text, active = true }) {
let btnStyles = active ? styles.btn**primary : styles.btn**secondary;
return <button className={`${styles.btn} ${btnStyles}`}>{text}</button>;
}
.btn {
border: none;
padding: 8px;
border-radius: 3px;
cursor: pointer;
flex: 1;

&\_\_primary {
background-color: $primary;
color: white;
}

&\_\_secondary {
background-color: $grey-light;
color: black;
}
}
