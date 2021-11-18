const Square = (props) => {

  const {zoomLevel, squareCoords, squareNo, bgColor, image} = props

  return (
    <div className="square" style={{
      width: "20%",
      height: "12.5%",
      position: "absolute",
      top: 100 * squareCoords.y * 60/480 + "%",
      left:  100 * squareCoords.x * 60/300 + "%",
      boxSizing: "border-box",
      border: "2px solid black",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: zoomLevel * 1 + "em",
      backgroundColor: bgColor
    }}>
  
      <span className="squareno">{squareNo + 1}</span>
      <span className="squareimage"><img src={window.location.href + `/images/${image}.png`} alt="" /></span>
    </div>
  );
}

export default Square;
