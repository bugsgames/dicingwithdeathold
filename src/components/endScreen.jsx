

function EndScreen (props) {

  const {restartGame} = props

  

  return (
   <>
   <p>A player won, I assume!</p> <div onClick={restartGame} style={{ 
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "5em",
      fontSize: "3em",
      border: "5px black solid",
      paddingLeft: "0.5em",
      paddingRight: "0.5em"

    }} ><span>RESTART</span></div></>
   
  )
}

export default EndScreen