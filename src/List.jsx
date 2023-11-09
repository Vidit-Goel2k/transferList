import ListItem from "./ListItem";

const List = ({ items, elements, setElements }) => {
  return (
    <>
      <div className="ListContainer flex">
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            elements={elements}
            setElements={setElements}
          />
        ))}
      </div>
    </>
  );
};

export default List;
