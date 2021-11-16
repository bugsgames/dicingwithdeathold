const Ladder = (props) => {
  const {boardDimensions, startPos, endPos, zoomLevel} = props

  return (
    <div className="ladder" style={{
      width: 50*(boardDimensions.width/5 - boardDimensions.width/120)/boardDimensions.width + "%",
      height: Math.sqrt((startPos.y - endPos.y)**2 + (startPos.x - endPos.x)**2)*100*(boardDimensions.height/8)/boardDimensions.height + "%",
      
      marginLeft:  (17.5 * boardDimensions.width/5 )/boardDimensions.width + "%",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      top: endPos.y * 100 * (boardDimensions.height/8)/boardDimensions.height + "%",
      left: endPos.x * 100 * (boardDimensions.width/5)/boardDimensions.width + "%",
      transformOrigin: "top center",
      transform: "translate(0,"+ boardDimensions.width/10 * zoomLevel + "px) rotate("+ Math.atan((-startPos.x + endPos.x)/( startPos.y - endPos.y)) *180/Math.PI+"deg)"
      }}>
<img style={{height: "100%",
zIndex: 10}} src={window.location.href + "images/ladder1.png"}/>
  

    </div>
  );
}

export default Ladder;
