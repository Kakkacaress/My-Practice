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
            li4={"/ABOUT"}
            li5={"/SIDEBAR"}
          />
          <section>
            <h2>kayode is our admin</h2>
            <h4>learnFactory</h4>
          </section>
        </code>
      </div>
    );
  }
}

export default myWeb;
