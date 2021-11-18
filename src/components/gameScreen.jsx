import Board from "./Board"
import Die from "./Die"
import MessageBox from "./MessageBox"

import useSound from 'use-sound';
import dieSfx from './../sounds/diesfx.mp3';
import slide1 from './../sounds/slide1.mp3';
import slide2 from './../sounds/slide2.mp3';
import slide3 from './../sounds/slide3.mp3';
import slide4 from './../sounds/slide4.mp3';
import up from './../sounds/up.mp3';
import down from './../sounds/down.mp3';

import applause from './../sounds/applause.mp3';


import { useEffect } from 'react'

const GameScreen = (props) => {
  const [dieSound] = useSound(dieSfx);
  const [slideSound1] = useSound(slide1);
  const [slideSound2] = useSound(slide2);
  const [slideSound3] = useSound(slide3);
  const [slideSound4] = useSound(slide4);
  const [upSound] = useSound(up);
  const [downSound] = useSound(down);
  const [applauseSound] = useSound(applause);

  const slideSounds = [slideSound1,slideSound2,slideSound3,slideSound4]
  const {
    setConfetti,
    soundOn,
    ladders,
    snakes,
    rollagains,
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
    resizing,
    setResizing,
    dimensions,
    setDimensions,
    firstResize,
    setFirstResize,
    setGameState
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

  



  

  


  

  
  const clearMessage = (winner) => {
    if (winner) {
      setConfetti(false)
      setGameState(2)
    } else {
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
  }


  const handleDieClick = () => {
    setDieEnabled(false)
    if (soundOn) dieSound()

    let i = 0
    let roll
    let interval = setInterval(() => {
      if (i < 5) {
        roll = rollDie()
        setLastRoll(roll)
        i+=1
      } else {
        setBoardState(1)
        if (soundOn) {
          let sound = slideSounds[Math.floor(Math.random() * 4)]
          setTimeout(sound,10)
        }
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

      if (targetPos > 39) targetPos = 39
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
  
 
      order.push(newPos)
  
      order.forEach((o,i)=>  setTimeout(() => updateTokenSquare(currentPlayer,o),i * 500))
      setTimeout(() => endTurn(order[order.length-1]), order.length * 500)
  
    }

    const endTurn = (endSquare) => {
      let delay = 500
      let turnMessage = false
      if (endSquare === 39) {
        setConfetti(true)
        if (soundOn) setTimeout(applauseSound,100)
        turnMessage = {
          winner: currentPlayer + 1,
          text: `Player ${currentPlayer + 1} won!`,
          colour:"rgba(0, 0, 255, 0.7)",
          rollagain: false
        }
      } else
      if (ladders[endSquare+1]) {
        if (soundOn) setTimeout(upSound,50)
        updateTokenSquare(currentPlayer,ladders[endSquare+1][0]-1)
        turnMessage = ladders[endSquare+1][2]
      } else
      if (snakes[endSquare+1]) {
        if (soundOn) setTimeout(downSound,50)
        updateTokenSquare(currentPlayer,snakes[endSquare+1][0]-1)
        turnMessage = snakes[endSquare+1][2]
      } else 
      if (rollagains[endSquare + 1]) {
        console.log(rollagains[endSquare+1])
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
    <h1>DICING WITH DEATH</h1>
   <Board rollagains={rollagains} resizing={resizing} setResizing={setResizing} dimensions={dimensions} currentPlayer={currentPlayer} tokenSquares={tokenSquares} ladders={ladders} snakes={snakes}/>
   <MessageBox clearMessage={clearMessage} winner={message.winner ? true : false} message={message.text} colour={message.colour} image={message.image} />
 
       <div className="dice">

   <Die player={0} currentPlayer={currentPlayer} disabled={dieEnabled && currentPlayer === 0? false : true} handleDieClick={handleDieClick} number={lastRoll } />
   <Die player={1} currentPlayer={currentPlayer} disabled={dieEnabled && currentPlayer === 1 ? false : true} handleDieClick={handleDieClick} number={lastRoll } />
   </div>
   
   
   <p>Current player: {currentPlayer + 1}</p>
   </>
  );

}
export default GameScreen