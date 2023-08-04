import React from 'react'
import Game from './Components/Game'
import Images from '../images/BG.jpeg'

function App (){

  return (
    <div style={{ backgroundImage:`url(${Images})`,backgroundRepeat:"no-repeat", backgroundSize:"cover", height: '800px', width: '100%'}}>
      <Game/> 
    </div>
  )
}

export default App


