import './styles/List.scss'

export function ListItem({ content, remove }) {
  return (
    <li className="ListItem">
      <p className="ListItem-content">{content}</p>
      <button className="ListItem-remove danger-btn" title="Delete" onClick={remove}>
        X
      </button>
    </li>
  );
}

export default function List({
  items,
  removeItem,
}) {
  return (
      <ul className="List">
        {items.map((item, index) => (
          <ListItem
            content={item}
            remove={() => removeItem(index)}
            key={index}
          />
        ))}
      </ul>
  );
}
