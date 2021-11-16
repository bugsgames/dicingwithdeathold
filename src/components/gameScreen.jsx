import Board from "./Board"
import Die from "./Die"
import MessageBox from "./MessageBox"

import { useMemo, useEffect } from 'react'

const GameScreen = (props) => {

  const {
  boardState,
  setBoardState,
  playerCount,
  tokenSquares,
  setTokenSquares,
  dieEnabled,
  setDieEnabled,
  lastRoll,
  setLastRoll,
  currentPlayer,
  setCurrentPlayer,
  message,
  setMessage,
  messagePool,
  resizing,
  setResizing,
  dimensions,
  setDimensions,
  firstResize,
  setFirstResize
  } = props

  const rollDie = () => Math.ceil(Math.random()*6)


  useEffect(() => {
    let clearResizingTimer = false
    const handleResize = () => {
      clearTimeout(clearResizingTimer);
      
      if (!resizing) setResizing(true)
      if (document.querySelector('.boardViewport')) {
        setDimensions({
          width: document.querySelector('.boardViewport').clientWidth,
          height: document.querySelector('.boardViewport').clientHeight,
        });
      }
      clearResizingTimer = setTimeout(()=>setResizing(false), 100);
    }
    if (!firstResize) {
      handleResize()
      setFirstResize(true)
    } 

    window.addEventListener("load", handleResize, false);

    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("load", handleResize, false);

      window.removeEventListener("resize", handleResize, false);
    }
  },[dimensions,resizing,setResizing, firstResize,setDimensions,setFirstResize])

  



  const randomMessage = (messageSet,colour) => {
    let messageText = ""
    if (messageSet) {
      let randomMessageIndex = Math.floor(Math.random() * messageSet.length)
      messageText = messageSet[randomMessageIndex]
      messageSet.splice(1,1)
    }
    return {
      text: messageText,
      colour: colour,
      rollagain: false
    }
  }

  const ladders = useMemo(() => {
    const ladderColors = ["#654321","grey","black"]
    const randomColor = () => ladderColors[Math.floor(Math.random() * ladderColors.length)]
    let messageSet = messagePool.ladderMessages
    let messageColour = "rgba(0, 128, 0, 0.7)"
    return {
      6: [16,randomColor(),randomMessage(messageSet,messageColour)],
      10: [19,randomColor(),randomMessage(messageSet,messageColour)],
      14: [23,randomColor(),randomMessage(messageSet,messageColour)],
      22: [30,randomColor(),randomMessage(messageSet,messageColour)],
      28: [36,randomColor(),randomMessage(messageSet,messageColour)],
      31: [39,randomColor(),randomMessage(messageSet,messageColour)]
     
    }
  },[messagePool])


  const snakes = useMemo(() => {
    const snakeColors = ["yellow","orange","coral","lightgreen"]
    let messageSet = messagePool.snakeMessages
    let messageColour = "rgba(255, 0, 0, 0.7)"
    const randomColor = () => snakeColors[Math.floor(Math.random() * snakeColors.length)]
    return {  
      7: [5,randomColor(),randomMessage(messageSet,messageColour)],
      13: [2,randomColor(),randomMessage(messageSet,messageColour)],
      20: [11,randomColor(),randomMessage(messageSet,messageColour)],
      27: [17,randomColor(),randomMessage(messageSet,messageColour)],
      29: [21,randomColor(),randomMessage(messageSet,messageColour)],
      37: [35,randomColor(),randomMessage(messageSet,messageColour)],
      38: [32,randomColor(),randomMessage(messageSet,messageColour)],
    }
  },[messagePool])

  const rollagains = useMemo(() => {
    let messageSet = messagePool.rollagainMessages
    let messageColour = "rgba(255, 165, 0, 0.7)"

    return {  
      2: [2,randomMessage(messageSet,messageColour)],
      4: [2,randomMessage(messageSet,messageColour)],
      8: [2,randomMessage(messageSet,messageColour)],
      12: [2,randomMessage(messageSet,messageColour)],
      17: [2,randomMessage(messageSet,messageColour)],
    }
  },[messagePool])



  

  
  const clearMessage = () => {

    setMessage({})
    if (playerCount === 1 && ((!message.rollagain && currentPlayer === 0) || (message.rollagain && currentPlayer === 1) )){
      setTimeout(() => handleDieClick(), 100)
    } else {
      setDieEnabled(true);
    }
    if (!message.rollagain) {
      setCurrentPlayer(currentPlayer ? 0 : 1);
    }
  }


  const handleDieClick = () => {
    setDieEnabled(false)
    let i = 0
    let roll
    let interval = setInterval(() => {
      if (i < 5) {
        roll = rollDie()
        setLastRoll(roll)
        i+=1
      } else {
        setBoardState(1)
        clearInterval(interval)
      }
    },100)
    
  }
   useEffect(() => {

    const updateTokenSquare = (player,newSquare) => {
      let newTokens = [...tokenSquares]
      newTokens[player] = newSquare
      setTokenSquares(newTokens)
    }

    const moveToken = (roll) => {
      let targetPos = tokenSquares[currentPlayer] + roll
      let newPos = tokenSquares[currentPlayer]
      let order = []
      while (targetPos !== newPos) {
        let sameLevel = Math.ceil((targetPos + 1) /5) === Math.ceil((newPos + 1) /5)
        if (sameLevel) {
          newPos = targetPos
        } else
        if (newPos % 5 === 4) {
          newPos += 1
        } else {
          newPos = 5 * (Math.ceil((newPos+1)/5)) - 1
        }
      
        if (newPos <= 39) order.push(newPos)
      }
  
      if (newPos > 39) {
        order.push(39)
        newPos = 39 - (newPos - 39)
      }
      order.push(newPos)
      console.log(order)
  
      order.forEach((o,i)=>  setTimeout(() => updateTokenSquare(currentPlayer,o),i * 500))
      setTimeout(() => endTurn(order[order.length-1]), order.length * 500)
  
    }

    const endTurn = (endSquare) => {
      let delay = 500
      let turnMessage = false
      if (endSquare === 39) {
        turnMessage = {
          text: "You have won!",
          colour:"rgba(0, 0, 255, 0.7)",
          rollagain: false
        }
      } else
      if (ladders[endSquare+1]) {
        updateTokenSquare(currentPlayer,ladders[endSquare+1][0]-1)
        turnMessage = ladders[endSquare+1][2]
      } else
      if (snakes[endSquare+1]) {
        updateTokenSquare(currentPlayer,snakes[endSquare+1][0]-1)
        turnMessage = snakes[endSquare+1][2]
      } else 
      if (rollagains[endSquare + 1]) {
        turnMessage = rollagains[endSquare+1][1]
        turnMessage.rollagain = true
        delay = 0
      } else {
        delay = 0
      }
      setTimeout(() => {
        if (turnMessage) {
          setMessage(turnMessage)
        } else
        if (currentPlayer === 0 && playerCount === 1){
          setTimeout(() => handleDieClick(), 100)
          setCurrentPlayer(currentPlayer ? 0 : 1);

        } else {
          setDieEnabled(true);
          setCurrentPlayer(currentPlayer ? 0 : 1);

        }
        setBoardState(0)
      },delay)
    }

    if (boardState === 1) {
      moveToken(lastRoll)
    }

// eslint-disable-next-line react-hooks/exhaustive-deps
  },[boardState])


  return (
    <>
   <Board resizing={resizing} setResizing={setResizing} dimensions={dimensions} currentPlayer={currentPlayer} tokenSquares={tokenSquares} ladders={ladders} snakes={snakes}/>
   <MessageBox clearMessage={clearMessage} message={message.text} colour={message.colour} />
 
       <div className="dice">

   <Die player={0} currentPlayer={currentPlayer} disabled={dieEnabled && currentPlayer === 0? false : true} handleDieClick={handleDieClick} number={dieEnabled ? "ROLL" : lastRoll } />
   <Die player={1} currentPlayer={currentPlayer} disabled={dieEnabled && currentPlayer === 1 ? false : true} handleDieClick={handleDieClick} number={dieEnabled ? "ROLL" : lastRoll } />
   </div>
   
   
   <p>Current player: {currentPlayer + 1}</p>
   </>
  );

}
export default GameScreen