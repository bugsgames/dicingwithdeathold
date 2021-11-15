const Snake = (props) => {
  const {boardDimensions, colour, startPos, endPos, zoomLevel} = props


  return (
    <div className="snake" style={{
      width: 50*(boardDimensions.width/5 - boardDimensions.width/120)/boardDimensions.width + "%",
      height: Math.sqrt((startPos.y - endPos.y)**2 + (startPos.x - endPos.x)**2)*100*(boardDimensions.height/8)/boardDimensions.height + "%",
     
      position: "absolute",
      display: "flex",
      marginLeft:  (25 * boardDimensions.width/5 )/boardDimensions.width + "%",

      flexDirection: "column",
      top: endPos.y * 100 * (boardDimensions.height/8)/boardDimensions.height + "%",
      left: endPos.x * 100 * (boardDimensions.width/5)/boardDimensions.width + "%",
      transformOrigin: "top center",
      transform: "translate(0,"+ boardDimensions.width/10 * zoomLevel + "px) rotate("+ Math.atan((-startPos.x + endPos.x)/( startPos.y - endPos.y)) *180/Math.PI+"deg)"
      }}>
         <div style={{height: "100%",
  width: "20%",
  position:"absolute",
  top: 0,
  left: "40%",
  backgroundColor: colour,
}}></div>

      <div style={{
  height: boardDimensions.width/15 * zoomLevel + "px",
  width: boardDimensions.width/15 * zoomLevel + "px",
  position:"absolute",
  left: "16%",
  top:  "-2%",
  backgroundColor: colour,
  borderRadius: "50%",
}}></div>

    </div>
  );
}

export default Snake;