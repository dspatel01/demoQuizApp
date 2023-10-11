import React from 'react'
import { useLocation } from 'react-router-dom'
import user from "../user.png";

const userDetail = {
    float: "right",
    marginTop: "20px",
    marginRight: "100px",
    width: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: 'center',
    background: "lightgray",
    padding: "5px"

}

const userName = {
    textAlign: "center",
    fontSize: "1.2rem",
    textTransform: "capitalize",
    padding: "10px"
}

const startButton = {
    content:"start",
    margin: "20px 50px",
    textDecoration: "none",
     background: "green",
    width: "100px",
    textAlign: "center",
    padding: "10px",
    borderRadius: "7px",
    cursor: "pointer",
    color: "white",
    fontSize: "1.1rem"
}

const finishButton = {
    content:"finish",
    margin: "20px 50px",
    textDecoration: "none",
    background: "red",
    width: "100px",
    textAlign: "center",
    padding: "10px",
    borderRadius: "7px",
    cursor: "pointer",
    color: "white",
    fontSize: "1rem"
}
const HtmlQuestionPage = (props) => {


    const location = useLocation()
    // console.log(location.state.name)



    return (
        <>
            <div style={userDetail}>
                <div className="img"><img src={user} alt="this is me" style={{ width: "50px" }} /></div>
                <div style={userName}>{location.state.name}</div>
            </div>

            <div >
                <button style={startButton}> Start test</button>
                <button style={finishButton}>Finish test</button>
            </div>

          
        </>
    )
}

export default HtmlQuestionPage