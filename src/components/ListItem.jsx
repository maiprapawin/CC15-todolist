import "./ListItem.scss";
import { FaInbox } from "react-icons/fa";

/*
props = {
    text: string
    icon: <Component />
    active: boolean
}


*/
function ListItem(props) {
  console.log(props); // props = {text: "custom text"}

  const listClassName = `list__item ${props.active ? "active" : ""}`;
  // active = false => textClassName = "list__item__text"
  // active = true => textClassName = "list__item__text active"
  return (
    <li className={listClassName}>
      {props.icon}
      <p className="list_item_text">{props.text}</p>
    </li>
  );
}
// CSS + JS Value == Dynamics ClassName
// not-active: className="list__item"
// active: className="list__item active"

export default ListItem;
