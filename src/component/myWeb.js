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
            li5={"/SIDEBAR"}
          />
          <p>
          i appreciate React so much infact its my favorite Library
          </p>

          <p>this is a new paragraph pls i hope you will see this one</p>

        </code>
      </div>
    );
  }
}

export default myWeb;
