import './App.css';

import StartScreen from './components/startScreen.jsx'
import EndScreen from './components/endScreen.jsx'
import GameScreen from './components/gameScreen.jsx'
import { VolumeOff, VolumeUp } from '@material-ui/icons';

import { useState,useEffect } from 'react';
import {useWindowSize} from '@react-hook/window-size';
import Confetti from 'react-confetti'

const parse = require('csv-parse')

const App = () => {
  const [width, height] = useWindowSize()

  const [confetti,setConfetti] = useState(false)
  const [gameState,setGameState] = useState(0)
  const [firstResize,setFirstResize] = useState(false)
  const [tokenSquares,setTokenSquares] = useState([0,0])
  const [dieEnabled,setDieEnabled] = useState(true)
  const [lastRoll,setLastRoll] = useState(1)
  const [currentPlayer,setCurrentPlayer] = useState(0)
  const [message,setMessage] = useState({})
  const [messagePool,setMessagePool] = useState(0)
  const [snakes,setSnakes] = useState(0)
  const [ladders,setLadders] = useState(0)
  const [rollagains,setRollagains] = useState(0)
  const [resizing,setResizing] = useState(false)
  const [playerCount,setPlayerCount] = useState(0)
  const [boardState,setBoardState] = useState(0)
  const [dimensions, setDimensions] = useState({
    width: 600,
    height: 600 * 1.6
  });
  const [soundOn,setSoundOn] = useState(true)

  const startGame = (playerCount) => {
    setPlayerCount(playerCount)
    setGameState(1)
  }

  const restartGame = () => {
    setConfetti(false)
    setGameState(0)
    setTokenSquares([0,0])
    setDieEnabled(true)
    setCurrentPlayer(0)
    setMessage({})
    setPlayerCount(0)
    setBoardState(0)
  }


  const displayGameState = (gameState) => {
    if (!messagePool) {
      return <h1 className="title">DICING WITH DEATH</h1>
    } else
    if (gameState === 0) {
      return <StartScreen messagePool={messagePool} startGame={startGame} />
    } else
    if (gameState === 1) {
      return <GameScreen
        setConfetti={setConfetti}
        soundOn={soundOn}
        setGameState={setGameState}
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
        snakes={snakes}
        ladders={ladders}
        rollagains={rollagains}
        />
    } else {
      return <EndScreen messagePool={messagePool} restartGame={restartGame} />
    }


    
  }

  useEffect(() => {
    

      
   
      if (!messagePool) {

        const loadMessageData = (parser,data) => {
          data.split("\n").forEach(d => 
            parser.write(d)
          )
        }
        

        let messages = {}
        const parser = parse({
          delimiter: ','
        })
        parser.on('readable', function(){
          let record
          // eslint-disable-next-line
          while (record = parser.read()) {

            let type = record[0]
            if (!messages[`${type}Messages`]){
              messages[`${type}Messages`] = []
            }
            messages[`${type}Messages`].push([record[1],record[2],record[3]])
          }
        })
    
        parser.on('error', function(err){
          console.error(err.message)
        })

        const csvurl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8mb7lgXCb2tO4IBhx7ERMI4s5KjVxFqiaV5SAZ52cMwsgcRnrTTx8nigACKv0o1cYA1c7woHGBvGF/pub?gid=0&single=true&output=csv"
        fetch(csvurl).then((response) => {
          return response.text();
        })
        .then((csvdata) => {
          
          loadMessageData(parser,csvdata)
          parser.end()

          setMessagePool(messages)

          const randomColor = (colors) => colors[Math.floor(Math.random() * colors.length)]

          const randomMessageArray = (array,colour) => {
            let i = array.length - 1;
            for (; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              const temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            return array.map ( a => {
              return {
                text: a[0],
                image: a[1],
                slimage: a[2],
                colour: colour,
                rollagain: false
              }
            })
          }
          
          
          
          if (!ladders) {

            const ladderColors = ["#654321","grey","black"]
            let ladderMessageColour = "rgba(0, 128, 0, 0.8)"
            let ladderMessageSet = randomMessageArray(messages.ladderMessages,ladderMessageColour)

            setLadders({
              6: [16,randomColor(ladderColors),ladderMessageSet[0]],
              10: [19,randomColor(ladderColors),ladderMessageSet[1]],
              14: [23,randomColor(ladderColors),ladderMessageSet[2]],
              22: [30,randomColor(ladderColors),ladderMessageSet[3]],
              28: [36,randomColor(ladderColors),ladderMessageSet[4]],
              31: [39,randomColor(ladderColors),ladderMessageSet[5]]
            })
          }

          if (!snakes) {
            const snakeColors = ["yellow","orange","coral","lightgreen"]

            let snakeMessageColour = "rgba(255, 0, 0, 0.8)"
            let snakeMessageSet = randomMessageArray(messages.snakeMessages,snakeMessageColour)

            setSnakes({  
              7: [5,randomColor(snakeColors),snakeMessageSet[0]],
              13: [2,randomColor(snakeColors),snakeMessageSet[1]],
              20: [11,randomColor(snakeColors),snakeMessageSet[2]],
              27: [17,randomColor(snakeColors),snakeMessageSet[3]],
              29: [21,randomColor(snakeColors),snakeMessageSet[4]],
              37: [35,randomColor(snakeColors),snakeMessageSet[5]],
              38: [32,randomColor(snakeColors),snakeMessageSet[6]],
            })
          }
          
          if (!rollagains)  {
            let rollagainMessageColour = "rgba(255, 165, 0, 0.8)"
            let rollagainMessageSet = randomMessageArray(messages.rollagainMessages,rollagainMessageColour)


            setRollagains({  
              2: [2,rollagainMessageSet[0]],
              4: [2,rollagainMessageSet[1]],
              8: [2,rollagainMessageSet[2]],
              12: [2,rollagainMessageSet[3]],
              17: [2,rollagainMessageSet[4]],
            })
          }
          
          
        })
      }


    
    
  },[messagePool,setMessagePool,ladders,snakes,rollagains])

  const soundToggle = () => {
    setSoundOn(soundOn ? false : true)
  }

  return (
    <>
    <div id="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
    }}>
    {displayGameState(gameState)}
    <div id="volumecontrol" onClick={soundToggle}>
      {
        soundOn ?  <VolumeUp style={{ fontSize: 40 }}  /> : <VolumeOff style={{ fontSize: 40 }}  />
      }

    </div>
 
    </div>
      
       {confetti ? 
        <div id="confetti" style={{zIndex: 50}}>
     <Confetti
       width={width}
       height={height}
     />      </div>
      : ""}
     </>
  )
}

export default App;
