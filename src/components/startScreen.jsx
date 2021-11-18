
import ReactMarkdown from 'react-markdown'

function StartScreen (props) {

  const {startGame,messagePool} = props

  

  return (
   <> 
   <h1 className="title">DICING WITH DEATH</h1>
   <p className="instructionsTitle">INSTRUCTIONS</p>
   {String(messagePool.introMessages[0][0]).split("<<").map ( (p, i) =>
  p.trim().length > 0 ? <p key={i} className="intro">
    
    
    
    <ReactMarkdown>{p}</ReactMarkdown>
    
    </p> :  <p key={i} className="spacer"></p>)
}
 
    <div className="startButtons" >
    <div className="startButton" onClick={() => startGame(2)}  >
      
      <span>PLAY WITH 2 PEOPLE</span>
      
      </div>
      
      <div className="startButton" onClick={() => startGame(1)}  >
      
      <span>PLAY WITH COMPUTER</span>
      
      </div>
      </div></>
   
  )
}

export default StartScreen