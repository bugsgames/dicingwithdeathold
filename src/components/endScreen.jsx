import ReactMarkdown from 'react-markdown'

function EndScreen (props) {

  const {messagePool, restartGame} = props

  

  return (
   <>
       <h1>DICING WITH DEATH</h1>

   {String(messagePool.outroMessages[0][0]).split("<<").map ( p =>
  p.trim().length > 0 ? <p>
  
    <ReactMarkdown>{p}</ReactMarkdown>

  
  </p> : <p className="spacer"></p>)
}
   
   <div onClick={restartGame} style={{ 
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