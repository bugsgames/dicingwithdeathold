import './App.css';

import StartScreen from './components/startScreen.jsx'
import EndScreen from './components/endScreen.jsx'
import GameScreen from './components/gameScreen.jsx'

import { useState,useEffect } from 'react'

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
  const [boardState,setBoardState] = useState(0)
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
    if (!messagePool) {
      return ""
    } else
    if (gameState === 0) {
      return <StartScreen messagePool={messagePool} startGame={startGame} />
    } else
    if (gameState === 1) {
      return <GameScreen
        boardState={boardState}
        setBoardState={setBoardState}
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

  useEffect(() => {
    const loadMessageData = (data) => {
      let messages = {}
      data.split("\n").forEach(d => {
        let commasep = d.split(",")
        let type = commasep.splice(0,1)
        if (!messages[`${type}Messages`]){
          messages[`${type}Messages`] = []
        }
        let message = commasep.join(",").trim()
        console.log(message.slice(0,1))
        if (message.slice(-1) === "\"" && message.slice(0,1) === "\"") {
          messages[`${type}Messages`].push(message.slice(1,-2))
        } else {
          messages[`${type}Messages`].push(message)

        }
      })
      return messages
    }
    if (!messagePool) {
     

      const csvurl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8mb7lgXCb2tO4IBhx7ERMI4s5KjVxFqiaV5SAZ52cMwsgcRnrTTx8nigACKv0o1cYA1c7woHGBvGF/pub?gid=0&single=true&output=csv"
      fetch(csvurl).then((response) => {
        return response.text();
      })
      .then((csvdata) => {
        console.log(csvdata)
        setMessagePool(loadMessageData(csvdata))
      })


    }
    
  },[messagePool,setMessagePool])

  

  return (

    <div id="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
    }}>
      <h1>{"Dicing With Death"}</h1>
    {displayGameState(gameState)}
    </div>
  )
}

export default App;
