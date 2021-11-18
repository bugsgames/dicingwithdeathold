const MessageBox = (props) => {

  const {clearMessage,message,colour,image,winner} = props
  
  
  return (
    <div className="messageBox" style={{
      width: 230,
      marginTop: 75,
      height: 330,
      top: 70,
      display: message ? "flex" : "none",
      border: "10px powderblue solid",
      backgroundColor: colour,
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 600,
      textAlign: "center",
      color:"white",
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      zIndex: 100
    }}
    onClick={() => clearMessage(winner)}
    >
      <img style={{width: "50%"}} src={window.location.href + `images/${image}-250-min.png`}  alt="" />
      <span>{message}</span>
      <div className="continue">CONTINUE</div>
    </div>
  );
}

export default MessageBox;
