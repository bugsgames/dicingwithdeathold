import d1 from './../images/d1-250-min.png'
import d2 from './../images/d2-250-min.png'
import d3 from './../images/d3-250-min.png'
import d4 from './../images/d4-250-min.png'
import d5 from './../images/d5-250-min.png'
import d6 from './../images/d6-250-min.png'


const Die = (props) => {

  const {player, currentPlayer, disabled, handleDieClick, number} = props
  
  const faces = {
    1: d1,
    2: d2,
    3: d3,
    4: d4,
    5: d5,
    6: d6
  }

  const dieColor = (player, disabled) => {
    if (disabled) {
      return "white"
    } else
    if (player) {
      return "red"
    } else {
      return "yellow"
    }
  }

  
  return (
    <div onClick={!disabled ? handleDieClick : undefined} className="die" style={{
      width: 80,
      marginTop: 10,
      display: "flex",
      height: 80,
      color: dieColor(player,disabled),
      position: "relative",
      alignItems: "center",
      justifyContent: "center"
    }}>

      {currentPlayer === player ? 
       <img style={{
        width: "100%"
      }} src={faces[number]} alt="" /> :  <span  style={{
        position: "absolute",
        width: "100%",
      }}>
  WAIT

      </span>
    }
      <span  style={{
        position: "absolute",
        width: "75%",
        backgroundColor:'rgba(0,0,0,0.8)'
      }}>

        { disabled ? "" : 
        
        ("ROLL")
        }

      </span>
    </div>
  );
}

export default Die;
