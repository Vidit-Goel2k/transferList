import "./styles.css";
import List from "./List";
import Actions from "./Actions";
import { useEffect, useState } from "react";
import { items } from "./data";

export default function App() {
  const [elements, setElements] = useState([
    ...items.map((item) => {
      return {
        value: item,
        side: "left",
        checked: false
      };
    })
  ]);

  const [moving, setMoving] = useState(false);

  const [newSide, setNewSide] = useState(false);

  const leftItems = elements.filter((element) => element.side === "left");
  const rightItems = elements.filter((element) => element.side === "right");

  const handleClick = () => {
    setMoving(true);
  };

  const setTempElement = (element) => {
    let tempElement = { ...element };
    if (moving && tempElement.checked === true) {
      tempElement.side = newSide;
    }
    tempElement.checked = false;
    return tempElement;
  };

  useEffect(() => {
    setElements((prevElements) => [...prevElements.map(setTempElement)]);
    setMoving(false);
  }, [moving]);

  return (
    <div className="App flex">
      <List items={leftItems} elements={elements} setElements={setElements} />
      <Actions handleClick={handleClick} setNewSide={setNewSide} />
      <List items={rightItems} elements={elements} setElements={setElements} />
    </div>
  );
}
