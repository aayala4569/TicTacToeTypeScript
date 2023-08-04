import { useState } from 'react';

interface SquareProps{
    value: string;
    onSquareClick: () => void;
}

function Square({ value, onSquareClick } : SquareProps) {

  function getImage(){
    if(value === 'x'){
      return <img className='Puppy' src="/images/Puppy.jpeg" style={{maxWidth: '100%', maxHeight: '100%'}} alt="x"/>;
    }
    else if(value ==='o'){
      return <img className='PuppyLove' src='images/PuppyLove.jpeg' style={{maxWidth: '100%', maxHeight: '100%'}} alt="o"/>;

    }
    else{
      return null
    }
  }
  return (
    <button className="square" onClick={onSquareClick}>
      {getImage()}
    </button>
  );
  }
export default Square
