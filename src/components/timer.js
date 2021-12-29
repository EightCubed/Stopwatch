import { useState, useEffect } from "react";
import "./styles.css";

function Timer() {
    const [count, setCount] = useState(0);
    const [Started,IsStarted] = useState(false);
    const [startButtonColor,setStartButtonColor] = useState("#8ab4f8")
    const [resetButtonColor,setResetButtonColor] = useState("#bdc1c6")
    
    useEffect(() => {
        if(Started){
        var x = setTimeout(() => {
          setCount((count) => count + 10);
        }, 10);
        return ()=>{
          clearTimeout(x);
        }
      }},[count,Started]);

      function StartTimer(){
        IsStarted(!Started);
      }

      function StopTimer(){
        IsStarted(false);
        setCount(0);
        
      }

      function changeStartButtonColor(){
        setStartButtonColor(( startButtonColor => "#1B66C4" ))
      }

      function changeStartButtonDefault(){
        setStartButtonColor(( startButtonColor => "#8ab4f8" ))
      }

      function changeResetButtonColor(){
        setResetButtonColor(( resetButtonColor => "#ffffff" ))
      }

      function changeResetButtonDefault(){
        setResetButtonColor(( resetButtonColor => "#bdc1c6" ))
      }

  return (
        <div style={{ backgroundColor : '#202324' , width : "50%" , height : "17rem" , display : "flex" , flexDirection : "column" , justifyContent : "center" , border : "3px solid #bdc1c6", borderRadius : "0.5rem"}}>
            
            <h1 style={ { fontFamily : "Times New Roman" , color : '#ffffff' , display : "flex" , alignContent : "start" , justifyContent : "center" , borderBottom : "1px solid #bdc1c6" , padding : "0rem 0rem 1rem 0rem"} }>STOP-WATCH</h1>
            
            <div style={ { fontSize : "2rem" , fontFamily : "cursive" , height : "4rem" , color : '#bdc1c6' , display : "flex" , justifyContent : "flex-start" , paddingLeft : "2rem"}}>
              <span style={ { fontSize : "3rem" } }>
                {("" + Math.floor((count / 1000) % 60)).slice(-2)}
                <span style={ { fontSize : "1.5rem" } }>s&nbsp;</span>
              </span>
              <span style={ { display : "flex" , alignSelf : "end"} }>
              <span>
                {("0" + ((count / 10) % 100)).slice(-2) }
              </span>
              </span>
              <br/>
            </div>
            <br/>
            <span style={ { display : "flex" , alignContent : "center" , borderTop : "1px solid #bdc1c6" , justifyContent : "flex-start" , alignItems : "end" ,padding : "1.2rem 0rem 0rem 1.2rem" } }>
            <button style={ { fontWeight : "bold" , fontFamily : "serif" , backgroundColor : startButtonColor , borderRadius : "0.3rem" , padding : "0.2rem 1rem 0.2rem 1rem", fontSize : "0.8rem"} } onMouseEnter={ changeStartButtonColor } onMouseLeave={ changeStartButtonDefault} onClick={StartTimer}>{!Started? "START":"PAUSE"}</button>
            &emsp;
            <button style={ { fontWeight : "bold" , fontFamily : "serif" , backgroundColor : resetButtonColor ,borderRadius : "0.3rem" , fontSize : "0.8rem" , padding : "0.2rem 1rem 0.2rem 1rem"} } onClick={StopTimer} onMouseEnter={ changeResetButtonColor } onMouseLeave={ changeResetButtonDefault}>RESET</button>    
            </span>
        </div>
    )
}

export default Timer;