import "../App.css";

const Item = ({ id, name, onDelete }) => {
  return (
    <li className="list-item">
      <input type="checkbox" />
      {name}

      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Item;
