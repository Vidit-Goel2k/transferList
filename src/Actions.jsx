const Actions = ({ handleClick, setNewSide }) => {
  return (
    <>
      <div className="ActionsContainer flex">
        <button
          onClick={() => {
            setNewSide("right");
            handleClick();
          }}
        >
          {">"}
        </button>
        <button
          onClick={() => {
            setNewSide("left");
            handleClick();
          }}
        >
          {"<"}
        </button>
      </div>
    </>
  );
};

export default Actions;
