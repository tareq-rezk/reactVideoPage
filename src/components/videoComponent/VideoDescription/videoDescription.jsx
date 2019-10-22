import React, { Component } from "react";
import "./videoDescription.css";
import axios from "axios";

class Description extends Component {
  state = {
    title: "click option to show",
    transShow: false,
    sumShow: false,
    translatShow: false,
    descrip: []
  };

  componentDidMount() {
    axios
      .get("http://api.linkpreview.net/?key=123456&q=https://www.google.com")
      .then(res => {
        this.setState({
          descrip: res.data
        });
      });
  }

  showTextHandler = name => {
    if (name === "transcript") {
      this.setState({
        transShow: !false,
        sumShow: false,
        translatShow: false,
        title: "transcript"
      });
    } else if (name === "summary") {
      this.setState({
        transShow: false,
        sumShow: !false,
        translatShow: false,
        title: "summary"
      });
    } else if (name === "translation") {
      this.setState({
        transShow: false,
        sumShow: false,
        translatShow: !false,
        title: "translation"
      });
    } else {
      this.setState({ showComponent: false });
    }
  };

  render() {
    return (
      <div className="col-lg-4">
        <h2>{this.state.title}</h2>
        <div className="border border-info divStyle">
          <div className="devTextContainer">
            {this.state.transShow === false ? null : (
              <div id="transcript" className="div-text">
                <p>transcript</p>
              </div>
            )}

            {this.state.sumShow === false ? null : (
              <div id="summary" className="div-text">
                <p>summary</p>
              </div>
            )}

            {this.state.translatShow === false ? null : (
              <div id="translation" className="div-text">
                <p>{this.state.descrip.description}</p>
              </div>
            )}
          </div>

          <div className="btns-container">
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("transcript")}
            >
              trascript
            </button>
            <button
              className="btn btn-info"
              onClick={() => this.showTextHandler("summary")}
            >
              summary
            </button>

            <select
              className="btn btn-info"
              onClick={() => this.showTextHandler("translation")}
            >
              <option value="Arabic">Arabic</option>
              <option value="English">English</option>
              <option value="spanish">spanish</option>
              <option value="France">France</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
