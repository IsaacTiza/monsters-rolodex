import React from "react";

import './card-list.style.css';
import '../card/card.component.jsx'
import { Card } from "../card/card.component.jsx";
export const CardList = props=> (
    
<div className="card-list">

    {props.monsters.map(monster=>(
        <Card key={monster.id} monster={monster}/>
    ))}
</div>
)