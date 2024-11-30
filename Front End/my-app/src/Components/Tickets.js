import React from "react";
import "../Styles/Tickets.css";

import FightClub from "../movies_img/FightClub.jpg";
import Inception from "../movies_img/Inception.jpg";
import Venom from "../movies_img/Venom.jpg";

const imageMap = {
  FightClub: FightClub,
  Inception: Inception,
  Venom: Venom,
}

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