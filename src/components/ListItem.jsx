import "./ListItem.scss";
import { FaInbox } from "react-icons/fa";

function ListItem(props) {
  console.log(props); // props = {text: "custom text"}
  return (
    <li className="list__item">
      {props.icon}
      <p className="list__item__text">{props.text}</p>
    </li>
  );
}

export default ListItem;
