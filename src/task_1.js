import React, { useState } from 'react';
import './task_1.css';

const CELLCLASS = 'game-cell';
const CLICKEDCELL = 'game-cell clicked';
const UNCLICKEDCELL = 'game-cell un-clicked';

const ClickCount = (props) => {
  return (
    <span>{props.count}</span>
  );
}

function Task_1({ row = 4, col = 4, NO_OF_RED_BOX = 2 }) {

  const [clicks, setClicks] = useState(0);
  const [clickedBoxes, addClickedBox] = useState([]);

  const generateGrid = () => {
    return new Array(row * col).fill(0).map(
      (k, i) =>
        <div
          className={CELLCLASS}
          id={i}
          onClick={(event) => (event.target.className === CELLCLASS) && handleClick(event)}
        >
        </div>);
  }

  const handleClick = async(event) => {
    setClicks(clicks+1);
    if(clickedBoxes.length > 1) {
      let removedElement = clickedBoxes.shift();
      removedElement.className = UNCLICKEDCELL;
    };

    clickedBoxes.push(event.target);
    addClickedBox(clickedBoxes);
    
    event.target.className = CLICKEDCELL;
    event.target.innerHTML = `Box ${clicks}`;
    event.target.removeEventListener('click', (e)=>{});
  }

  return (
    <div>
      <h1>Simple 4 x 4 Grid Game</h1>
      <div className='container'>
        <div className="game-container">
          <div className="game">
            {generateGrid()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task_1;
