import "./App.scss";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoLists from "../components/Todo/TodoLists";

function App() {
  // <ListItem text="Inbox" icon={<FaInbox />} active={true} />
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 Days", icon: <FaCalendarAlt />, active: false },
  ];

  // <ListItem text="Project-A" icon={<FaInbox />} active={true} />
  // <ListItem text="Project-B" icon={<FaInbox />} active={false} />;
  const projectLists = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];

  // ObjectDetail => <ListItem ...ObjectDetail /> กระจายเพื่อให้มันเป็น props

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoLists />
        </main>
      </div>
    </div>
  );
}

export default App;

/* Challenge: Refactor
- ให้ 2 sections render UI ที่... 
    - Option A (2/5): render UI ต่างกัน แบ่งเป็น <Lists /> กับ <Accordion />
    - Option B (4/5): render UI เดียวกัน เป็น <Lists /> เฉยๆ
    - Option C (5/5): render <List /> ภายใต้ <Accordion><List /></Accordion>
    // props.children
*/
