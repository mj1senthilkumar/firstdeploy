import React from "react";
import { Card } from "../card-component/card-component";
import './card-list-style.css';

export const CardsLists = props => {
    return <div className="card-list">
        {props.monsters.map(monster => {
            return <Card key={monster.id} monster={monster}></Card>
        })}
    </div>
};