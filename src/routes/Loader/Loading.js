import React, { Component } from "react";
import "./Loading.css";
class Loading extends Component {
  render() {
    return (
      <div id="lo">
        <div id="lol">
          <div id="container">
            <div class="divider" aria-hidden="true"></div>
            <p class="loading-text" aria-label="Loading">
              <span class="letter" aria-hidden="true">
                L
              </span>
              <span class="letter" aria-hidden="true">
                o
              </span>
              <span class="letter" aria-hidden="true">
                a
              </span>
              <span class="letter" aria-hidden="true">
                d
              </span>
              <span class="letter" aria-hidden="true">
                i
              </span>
              <span class="letter" aria-hidden="true">
                n
              </span>
              <span class="letter" aria-hidden="true">
                g
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
