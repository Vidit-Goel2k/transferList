const ListItem = ({ item, elements, setElements }) => {
  const handleChange = (e) => {
    const currentElement = {
      value: +e.target.id,
      checked: e.target.checked
    };
    const setTempElements = (tempElement) => {
      return tempElement.value === currentElement.value
        ? { ...tempElement, checked: currentElement.checked }
        : tempElement;
    };
    setElements((prevElements) => prevElements.map(setTempElements));
  };

  return (
    <>
      <li className="ListItems">
        <label htmlFor="ListItems">
          <input
            onChange={handleChange}
            type="checkbox"
            name="ListItems"
            id={`${item.value}`}
            checked={item.checked}
          />
          {item.value}
        </label>
      </li>
    </>
  );
};

export default ListItem;
