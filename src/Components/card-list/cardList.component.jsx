import React from "react";
import "./cardList.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card key={index} monster={monster} />
      ))}
    </div>
  );
};
