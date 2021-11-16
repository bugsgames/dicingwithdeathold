
import Square from './Square'
import Token from './Token'
import Ladder from './Ladder'
import Snake from './Snake'

const Board = (props) => {

  const {rollagains, dimensions, resizing, setResizing, tokenSquares, ladders, snakes, currentPlayer} = props
  



  const squareCoords = [...Array(40)].map((s, i) => {
    let x
    let y = Math.floor(i/5)
    if (Math.floor(i/5) % 2) {
      x = 4 - i % 5
    } else {
      x =  (i % 5)
    }
    return {x: x, y: y}

  }
  ).reverse()

  let zoomLevel = 1
  const boardDimensions = {
    width: 600,
    height: 600 * 1.6
  }
  const viewX = (zoomLevel) => {
    let x = zoomLevel * ( (squareCoords[tokenSquares[currentPlayer]].x * boardDimensions.width/5) ) - boardDimensions.width/2
    if (x <= 0) {
      return 0
    } else
    if (x <= boardDimensions.width - dimensions.width ) {
      return boardDimensions.width - dimensions.width
    } else {
      return (x - dimensions.width + boardDimensions.width )
    }
  }
  const viewY = (zoomLevel) => {
    let x = zoomLevel * ( (squareCoords[tokenSquares[currentPlayer]].y * boardDimensions.height/8) ) - boardDimensions.height/2
    return x + (boardDimensions.height - dimensions.height)/2
  
    
  }
  return (
    <div className="boardViewport">
      <div className="board" style={{
        width: 600 * zoomLevel + "px",
        height: 600 * 1.6 * zoomLevel + "px",
        top: -viewY(zoomLevel),
        left: -viewX(zoomLevel)  ,
        backgroundColor: "black",
        transition: resizing ? "none" : "all 0.5s ease-in-out",
        position: "absolute",
        overflow: 'hidden'
      }}>
      {[...Array(5)].map((e, i) =>
      
      [...Array(8)].map((f, j) =>
      
      <Square image={rollagains[i*8 + j + 1] ? "ra-bear-100" : ""} boardDimensions={boardDimensions} zoomLevel={zoomLevel} squareCoords={squareCoords[i*8 + j]} key={i*5 + j} squareNo={i*8 + j}/>)
      
      )
      }
   
      {Object.keys(snakes).map((s,i) => squareCoords[s-1] && squareCoords[snakes[s][0]-1] ? <Snake boardDimensions={boardDimensions} zoomLevel={zoomLevel} key={i} colour={snakes[s][1]} endPos={squareCoords[s-1]} startPos={squareCoords[snakes[s][0]-1]}/> : "") }
      {Object.keys(ladders).map((l,i) => squareCoords[l-1] && squareCoords[ladders[l][0]-1] ? <Ladder boardDimensions={boardDimensions} zoomLevel={zoomLevel} key={i} colour={ladders[l][1]} startPos={squareCoords[l-1]} endPos={squareCoords[ladders[l][0]-1]}/> : "") }
      
      {[1,0].map(n => 
        <Token key={n} resizing={resizing} setResizing={setResizing} boardDimensions={boardDimensions} zoomLevel={zoomLevel} tokenNo={n+1} opPosition={squareCoords[tokenSquares[n ? 0 : 1]]}  position={squareCoords[tokenSquares[n]]}   />
      )}
      </div>
    </div>
  );
}

export default Board;
