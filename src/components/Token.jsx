const Token = (props) => {
  const {resizing,boardDimensions, tokenNo, opPosition, position, zoomLevel} = props



  return (
    <div className="token" style={{
      width: boardDimensions.width/5 * zoomLevel,
      height: boardDimensions.height/8 * zoomLevel,
      borderRadius: "50%",
      backgroundColor: tokenNo === 1 ? "red" : "yellow",
      position: "absolute",
      transition: resizing ? "none" : "all 0.5s linear",
      top: zoomLevel * (tokenNo === 2 && opPosition === position ? position.y * boardDimensions.height/8 - boardDimensions.height/200: position.y * boardDimensions.height/8),
      left: zoomLevel * (tokenNo === 2 && opPosition === position ? position.x * boardDimensions.width/5 + boardDimensions.height/200: position.x * boardDimensions.width/5),
    }}>
    </div>
  );
}

export default Token;
