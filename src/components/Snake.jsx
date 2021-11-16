const Snake = (props) => {
  const {boardDimensions, image, startPos, endPos, zoomLevel} = props


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


 
<img style={{height: "100%",
zIndex: 10}} src={window.location.href + `images/${image}.png` } alt=""/>


    </div>
  );
}

export default Snake;