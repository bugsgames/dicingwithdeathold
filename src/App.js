import './App.css';

import StartScreen from './components/startScreen.jsx'
import EndScreen from './components/endScreen.jsx'
import GameScreen from './components/gameScreen.jsx'

import { useState } from 'react'

const App = () => {
  const [gameState,setGameState] = useState(0)
  const [firstResize,setFirstResize] = useState(false)
  const [tokenSquares,setTokenSquares] = useState([0,0])
  const [dieEnabled,setDieEnabled] = useState(true)
  const [lastRoll,setLastRoll] = useState(1)
  const [currentPlayer,setCurrentPlayer] = useState(0)
  const [message,setMessage] = useState({})
  const [messagePool,setMessagePool] = useState(0)
  const [resizing,setResizing] = useState(false)
  const [playerCount,setPlayerCount] = useState(0)

  const [dimensions, setDimensions] = useState({
    width: 600,
    height: 600 * 1.6
  });
    const startGame = (playerCount) => {
      setPlayerCount(playerCount)
      setGameState(1)

  }

  const restartGame = () => {
    
  }


  const displayGameState = (gameState) => {
    if (gameState === 0) {
      return <StartScreen startGame={startGame} />
    } else
    if (gameState === 1) {
      return <GameScreen
        playerCount={playerCount}
        tokenSquares={tokenSquares}
        setTokenSquares={setTokenSquares}
        dieEnabled={dieEnabled}
        setDieEnabled={setDieEnabled}
        lastRoll={lastRoll}
        setLastRoll={setLastRoll}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        message={message}
        setMessage={setMessage}
        messagePool={messagePool}
        setMessagePool={setMessagePool}
        resizing={resizing}
        setResizing={setResizing}
        dimensions={dimensions}
        setDimensions={setDimensions}
        firstResize={firstResize}
        setFirstResize={setFirstResize}
        />
    } else {
      return <EndScreen restartGame={restartGame} />
    }


    
  }

  

  return (

    <div id="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>{"Dicing With Death"}</h1>
    {displayGameState(gameState)}
    </div>
  )
}

export default App;
