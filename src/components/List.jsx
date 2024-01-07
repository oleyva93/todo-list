import "../App.css";
import Item from "./Item";

const List = ({ list, onDelete }) => {
  return (
    <ul className="list">
      {list.map((task) => {
        return (
          <Item
            key={task.id}
            id={task.id}
            name={task.name}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

export default List;
