

function StartScreen (props) {

  const {startGame} = props

  

  return (
   <> <p>
     This is a game about antibiotics.
    </p>
    <div style={{display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "5em",}}>
    <div onClick={() => startGame(2)} style={{ 
     
      fontSize: "3em",
      border: "5px black solid",
      paddingLeft: "0.5em",
      paddingRight: "0.5em"

    }} >
      
      <span>PLAY WITH 2 PEOPLE</span>
      
      </div>
      
      <div onClick={() => startGame(1)} style={{ 
      marginTop: "1em",
      fontSize: "3em",
      border: "5px black solid",
      paddingLeft: "0.5em",
      paddingRight: "0.5em"

    }} >
      
      <span>PLAY AGAINST A COMPUTER</span>
      
      </div>
      </div></>
   
  )
}

export default StartScreen