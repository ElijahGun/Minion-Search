import React from 'react';
import './card-list.style.css';

import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div className="card-list">
    {props.people.map((person) => (
      <Card key={person.id} person={person} />
    ))}
  </div>
);
