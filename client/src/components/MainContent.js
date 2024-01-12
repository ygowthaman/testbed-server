import React from "react";
import Genres from "./Genres";

class MainContent extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-2">
          <Genres />
        </div>
      </div>
    );
  }
}

export default MainContent;
