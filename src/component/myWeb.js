import React, { Component } from "react";
import "./myWebStyle.css";
import Header from "./header";

class myWeb extends Component {
  render() {
    return (
      <div>
        <code>
          <Header
            logo={"iHELP 24/7"}
            li1={"/HOME"}
            li2={"/SERVICES"}
            li3={"/CONTACT"}
            li4={"/ABOUT"}
          />
        </code>
      </div>
    );
  }
}

export default myWeb;
