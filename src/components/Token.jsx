const Token = (props) => {
  const {resizing,boardDimensions, tokenNo, opPosition, position, zoomLevel} = props



  return (
    <div className="token" style={{
      width: boardDimensions.width/10 * zoomLevel,
      height: boardDimensions.height/16 * zoomLevel,
      borderRadius: "50%",
      backgroundColor: tokenNo === 1 ? "red" : "yellow",
      position: "absolute",
      transition: resizing ? "none" : "all 0.5s linear",
      top: (zoomLevel * boardDimensions.height/8 * 0.1) + zoomLevel * (tokenNo === 2 && opPosition === position ? position.y * boardDimensions.height/8 + boardDimensions.height/100 : position.y * boardDimensions.height/8),
      left: (zoomLevel * boardDimensions.width/5 * 0.1) + zoomLevel * (tokenNo === 2 && opPosition === position ? position.x * boardDimensions.width/5 + boardDimensions.height/100: position.x * boardDimensions.width/5),
    }}>
    </div>
  );
}

export default Token;
