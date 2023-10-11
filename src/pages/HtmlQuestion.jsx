import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


const HtmlQuestion = () => {
  const [name, setName] = useState("")

  const navigate = useNavigate()


  const handleInput = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name===""){
      alert("enter your name")
    }else{
      navigate("/htmlQuestionPage",{
        state:{
          name : name
        }
      })
      
    } 
  }
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "15px" }}> Welcome to HTML Test Quiz</h1>

      <form style={{ margin: "0 auto", width: "400px", marginTop: "70px" }} onSubmit={handleSubmit} data={name}>
        <input type="text"
          placeholder='Enter your name'
          value={name}
          style={{ width: "400px", padding: "7px 2px", fontSize: "20px", border: "none", outline: "none", borderBottom: "1px solid black" }}
          onChange={handleInput}
        /> <br />
        <button type='submit' style={{ width: "300px", padding: "10px 0", fontSize: "18px", margin: "15px 50px", border: "none", outline: "none", background: "black", color: "white", borderRadius: "15px" }}>
          Submit
        </button>
      </form>

      <div style={{ textAlign: "center", border: "1px solid black", margin: "120px auto", padding: "25px", width: "600px" }}>
        <p>This Quiz have 25 Questions. Eatch Question will give you 1 marks. You should be gain minimum 13 number to pass this test.</p>
      </div>
    </>
  )
}

export default HtmlQuestion