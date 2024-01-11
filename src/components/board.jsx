import React from "react";
import Square from "./square";

const Board = (props) => {
  const squareRender = (i) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );

  return (
    <div>
      <div>
        {squareRender(0)} {squareRender(1)} {squareRender(2)}
      </div>
      <div>
        {squareRender(3)} {squareRender(4)} {squareRender(5)}
      </div>
      <div>
        {squareRender(6)} {squareRender(7)} {squareRender(8)}
      </div>
    </div>
  );
};

export default Board;
