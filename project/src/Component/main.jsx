

import { React, useEffect, useState } from "react";
import axios from "axios";
import "../css/main.css";
import ReactDOM from "react-dom";
// import "./main.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  
  const [inputValue, setInputValue] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("event:", event.target[0].value);
    apiSend(event.target[0].value)
  };
  // useEffect(() => {
  //   const rootElement = document.getElementById("conversation_body");
  //   const elemet = React.createElement("div",{children: inputValue})
  //   ReactDOM.render(elemet, rootElement);
  // }, [inputValue]);

  function apiSend(props) {
    let var_status = "";
    console.log("props:", props);
    const url = "http://49.50.173.20:5000";
    let url_set = url + "/ping";
    axios
    //   .get(url_set, {
    //     params: {
    //       status: var_status,
    //     },
    //   })
      .get(url_set)
      .then(function (response) {
        //setdata(response.data);
        setInputValue(response.data);

        console.log("brands:", response.data);
        console.log("성공");
      })
      .catch(function (error) {
        console.log("실패");
      });
  }


  return (
    <div className = "main">
    <div className = "main_frame">
        <div className = "conversation_head">
            <div className = "head_text">head</div>
        </div>
        <div className = "conversation_body" id = "conversation_body">
            <div className = "body_text">body</div>
        </div>
        <div className = "conversation_footer" >
            <div className = "input_div">
                <form onSubmit={handleSubmit} className = "input_form">
                    <input type="text" name="question" className = "question_input" />
                    
                    <button type = "submit" className = "question_submit_button"  >
                        <span> generate </span>
                    </button>
                </form>
            </div>
        </div>
    </div>

</div>
    
      
    
  );
};

export default Main;