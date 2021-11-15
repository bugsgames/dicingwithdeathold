const Square = (props) => {

  const {zoomLevel, squareCoords, squareNo} = props

  return (
    <div className="square" style={{
      width: "20%",
      height: "12.5%",
      position: "absolute",
      top: 100 * squareCoords.y * 60/480 + "%",
      left:  100 * squareCoords.x * 60/300 + "%",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      fontSize: zoomLevel * 1 + "em",
      backgroundColor: (squareCoords.x % 2 && !(squareCoords.y % 2)) || (!(squareCoords.x % 2) && squareCoords.y % 2) ? "green" : "blue"
    }}>
      <span>{squareNo + 1}</span>
    </div>
  );
}

export default Square;
