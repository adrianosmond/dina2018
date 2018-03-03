import React from 'react';
import { Link } from 'react-router-dom';

import Person from './Person';

import personUrl from '../utils/utils';

import data from '../data.json';

const Suspects = () => 
  <div className="App">
    <div className="person-grid">{ data.map(person => 
      <Link className="person-grid__item" to={`/interrogate/${personUrl(person)}`} key={`${person.firstName}${person.surname}`}>
        <Person {...person} />
      </Link>)}
    </div>
  </div>

export default Suspects;