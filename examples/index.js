import React from "react";
import ReactDOM from "react-dom";
import  renderEmail  from "../src/renderEmail"
import email from "./kitchenSink"
class HelloMessage extends React.Component {
  render() {
    return  <code>{renderEmail(email)}</code> 
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);