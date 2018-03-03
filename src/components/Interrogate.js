import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Questions from './Questions';

import personUrl from '../utils/utils';

import data from '../data.json';

class Interrogate extends Component {
  constructor(props) {
    super(props);
    const suspectName = this.props.match.params.suspect;
    const suspect = data.find(person => personUrl(person) === suspectName);

    this.state = {
      suspect
    }
  }

  render() {
    const { suspect } = this.state;
    return (
      <div className="interrogation">
        <Link className="interrogation__back" to="/">&larr;Back to the suspects</Link>
        <h1 className="interrogation__title">Interrogating {suspect.firstName} {suspect.surname}</h1>
        <Questions suspect={suspect} />
        <button className="interrogation__accuse">Accuse {suspect.firstName}</button>
      </div>
      
    );
  }
}

export default Interrogate;