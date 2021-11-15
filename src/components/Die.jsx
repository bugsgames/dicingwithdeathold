const Die = (props) => {

  const {player, currentPlayer, disabled, handleDieClick, number} = props
  
  const dieColor = (player, disabled) => {
    if (disabled) {
      return "gray"
    } else
    if (player) {
      return "yellow"
    } else {
      return "red"
    }
  }
  const dotStyle = {
    height: 100/6 + "%",
    width: 100/6 + "%",
    backgroundColor: dieColor(player,false),
    borderRadius: "50%",
    position: "absolute",
    display: "inline-block"
  }
  const dots = { 1: <div style={{...dotStyle, top: 250/6 + "%", left: 250/6 + "%"}}></div>,
    2: <><div style={{...dotStyle, top: 100/6 + "%", left: 100/6 + "%"}}></div><div style={{...dotStyle, top: 400/6 + "%", left: 400/6 + "%"}}></div></>,
    3: <>
      <div style={{...dotStyle, top: 100/6 + "%", left: 100/6 + "%"}}></div>
      <div style={{...dotStyle, top: 250/6 + "%", left: 250/6 + "%"}}></div>
      <div style={{...dotStyle, top: 400/6 + "%", left: 400/6 + "%"}}></div>
    </>,
    4: <>
      <div style={{...dotStyle, top: 100/6 + "%", left: 100/6 + "%"}}></div>
      <div style={{...dotStyle, top: 100/6 + "%", left: 400/6 + "%"}}></div>
      <div style={{...dotStyle, top: 400/6 + "%", left: 10}}></div>
      <div style={{...dotStyle, top: 400/6 + "%", left: 400/6 + "%"}}></div>
    </>,
    5: <>
     <div style={{...dotStyle, top: 100/6 + "%", left: 100/6 + "%"}}></div>
     <div style={{...dotStyle, top: 100/6 + "%", left: 400/6 + "%"}}></div>
     <div style={{...dotStyle, top: 250/6 + "%", left: 250/6 + "%"}}></div>
     <div style={{...dotStyle, top: 400/6 + "%", left: 100/6 + "%"}}></div>
     <div style={{...dotStyle, top: 400/6 + "%", left: 400/6 + "%"}}></div>
    </>,
    6: <>
      <div style={{...dotStyle, top: 100/6 + "%", left: 100/6 + "%"}}></div>
      <div style={{...dotStyle, top: 100/6 + "%", left: 400/6 + "%"}}></div>
      <div style={{...dotStyle, top: 250/6 + "%", left: 100/6 + "%"}}></div>
      <div style={{...dotStyle, top: 250/6 + "%", left: 400/6 + "%"}}></div>
      <div style={{...dotStyle, top: 400/6 + "%", left: 100/6 + "%"}}></div>
      <div style={{...dotStyle, top: 400/6 + "%", left:  400/6 + "%"}}></div>
    </>,

  }
  
  return (
    <div onClick={!disabled ? handleDieClick : undefined} className="die" style={{
      width: 80,
      marginTop: 10,
      display: "flex",
      height: 80,
      backgroundColor: "black",
      color: dieColor(player,disabled),
      position: "relative",
      alignItems: "center",
      justifyContent: "center"
    }}>
      { currentPlayer === player ?
      (dots[number] ? dots[number] : number) : "WAIT"
       }
      
    </div>
  );
}

export default Die;
