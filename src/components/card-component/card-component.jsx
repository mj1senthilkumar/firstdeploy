import React from "react";

export const Card = props => {
    return <div>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`}/>
            <p>{props.monster.name}</p>
        </div>
};