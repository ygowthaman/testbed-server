import React from "react";
import { genres } from "../models/genres.model";

class Genres extends React.Component {

  render() {
    return (
      <div>
        <ul class="list-group list-group-flush">
          {genres.map((g) => (
            <li class="list-group-item">{`${g.name} (${g.noOfTitles})`}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Genres;
