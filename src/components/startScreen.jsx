

function StartScreen (props) {

  const {startGame,messagePool} = props

  

  return (
   <> <p>
     {messagePool.introMessages[0]}
    </p>
    <div style={{display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "50%",
      marginTop: "5em",}}>
    <div onClick={() => startGame(2)} style={{ 
     
      fontSize: "2em",
      border: "5px black solid",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      width: "100%",
      display: "flex",

      height: "4em",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",

    }} >
      
      <span>PLAY WITH 2 PEOPLE</span>
      
      </div>
      
      <div onClick={() => startGame(1)} style={{ 
      marginTop: "1em",
      fontSize: "2em",
      border: "5px black solid",
      height: "4em",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      width: "100%",


    }} >
      
      <span>PLAY AGAINST A COMPUTER</span>
      
      </div>
      </div></>
   
  )
}

export default StartScreen