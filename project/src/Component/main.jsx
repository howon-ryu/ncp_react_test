

import { React, useEffect } from "react";
import axios from "axios";
import "../css/main.css";

// import "./main.css";
import { Link } from "react-router-dom";

const Main = (props) => {
  
  const [inputValue, setInputValue] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event:", event);
    apiSend(event.target.value)
  };
  useEffect(() => {
    const rootElement = document.getElementsById("conversation_body");
    const elemet = React.createElement("div",{children: inputValue})
    ReactDOM.render(elemet, rootElement);
  }, [inputValue]);

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
    <div class = "main">
    <div class = "main_frame">
        <div class = "conversation_head">
            <div class = "head_text">head</div>
        </div>
        <div class = "conversation_body" id = "conversation_body">
            <div class = "body_text">body</div>
        </div>
        <div class = "conversation_footer" >
            <div class = "input_div">
                <form onsubmit={handleSubmit} class = "input_form">
                    <input type="text" name="question" class = "question_input" />
                    
                    <button type = "submit" class = "question_submit_button"  >
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