import React from "react";
import "../Styles/Tickets.css";


function Tickets() {
    return (
        <div className="Tickets">
          <div className="Search-Bar-Container">
            <h2 className="Search-Bar-Heading">
              Search:
              <input
                type="text"
                placeholder="Search Movies"
                className="Search-Input"
              />
            </h2>
          </div>
        </div>
      );
}

export default Tickets;