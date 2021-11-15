const Ladder = (props) => {
  const {boardDimensions, colour, startPos, endPos, zoomLevel} = props

  return (
    <div className="ladder" style={{
      width: 50*(boardDimensions.width/5 - boardDimensions.width/120)/boardDimensions.width + "%",
      height: Math.sqrt((startPos.y - endPos.y)**2 + (startPos.x - endPos.x)**2)*100*(boardDimensions.height/8)/boardDimensions.height + "%",
      borderLeft: `${boardDimensions.width/50 * zoomLevel}px ${colour} solid`,
      borderRight: `${boardDimensions.width/50 * zoomLevel}px ${colour} solid`,
      marginLeft:  (17.5 * boardDimensions.width/5 )/boardDimensions.width + "%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      top: endPos.y * 100 * (boardDimensions.height/8)/boardDimensions.height + "%",
      left: endPos.x * 100 * (boardDimensions.width/5)/boardDimensions.width + "%",
      transformOrigin: "top center",
      transform: "translate(0,"+ boardDimensions.width/10 * zoomLevel + "px) rotate("+ Math.atan((-startPos.x + endPos.x)/( startPos.y - endPos.y)) *180/Math.PI+"deg)"
      }}>

      {[...Array((startPos.y - endPos.y)*2+1)].map((_, i) => 
            <div key={i} style={{
              borderBottom: i === (startPos.y - endPos.y)*2  ? "none": `${boardDimensions.width/50 * zoomLevel}px ${colour} solid`,
              marginLeft: -boardDimensions.width/100 * zoomLevel,
              marginRight: -boardDimensions.width/100 * zoomLevel,
              height: (boardDimensions.height/4) * zoomLevel
            }}>
            </div>

      )}
  

    </div>
  );
}

export default Ladder;
