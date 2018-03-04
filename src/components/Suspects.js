import React from 'react';
import { Link } from 'react-router-dom';

import Person from './Person';

import personUrl from '../utils/utils';

import data from '../data.json';

const Suspects = (props) => {
  const country = props.match.params.country;
  if (['de', 'fr', 'gb', 'nl'].indexOf(country) < 0) return null;
  return (
    <div>
      {/* <div className="top-bar">
        <div className="top-bar__inner">
          <Link className="top-bar__link" to="/fly">Fly somewhere else</Link>
        </div>
      </div> */}
      <div className="wrapper wrapper--spaced">
        <div className="button-holder">
          <Link className="button button--positive" to="/fly">Fly somewhere else</Link>
        </div>
      </div>
      <div className="person-grid">{ data.filter(p => p.country === country).map(person => 
        <Link className="person-grid__item" to={`/interrogate/${personUrl(person)}`} key={`${person.firstName}${person.surname}`}>
          <Person {...person} />
        </Link>)}
      </div>
    </div>
  )
}

export default Suspects;