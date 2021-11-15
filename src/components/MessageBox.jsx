const MessageBox = (props) => {

  const {clearMessage,message,colour} = props
  
  
  return (
    <div className="messageBox" style={{
      width: 230,
      marginTop: 140,
      height: 200,
      top: 70,
      display: message ? "flex" : "none",
      border: "10px white solid",
      backgroundColor: colour,
      paddingLeft: 10,
      paddingRight: 10,
      textAlign: "center",
      color:"white",
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}
    onClick={clearMessage}
    >
      <span>{message}</span>
      <div className="continue">CONTINUE</div>
    </div>
  );
}

export default MessageBox;
