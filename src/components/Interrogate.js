import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Questions from './Questions';
import Accusation from './Accusation';

import personUrl from '../utils/utils';
import State from '../utils/state';

import data from '../data.json';

class Interrogate extends Component {
  constructor(props) {
    super(props);
    const suspectName = this.props.match.params.suspect;
    const suspect = data.find(person => personUrl(person) === suspectName);

    this.state = {
      suspect,
      accusation: false,
      weapon: null
    }
  }

  selectWeapon(event) {
    this.setState({
      weapon: event.target.value
    });
  }

  accuse() {
    const { suspect } = this.state;
    this.setState({
      accusation: {
        name: `${suspect.firstName} ${suspect.surname}`,
        enoughInfo: State.enoughInfoToComplete(),
        selectWeapon: this.selectWeapon.bind(this)
      }
    })
  }

  cancelAccusation() {
    this.setState({
      accusation: null
    });
  }

  render() {
    const { suspect, accusation, weapon } = this.state;
    return (
      <div className={`interrogation${accusation ? ' interrogation--accusation' : ''}`}>
        <h1 className="interrogation__title">Interrogating {suspect.firstName} {suspect.surname}</h1>
        <Questions suspect={suspect} />
        <div className="button-holder interrogation__buttons">
          <Link className="button button--positive" to={`/suspects/${suspect.country}`}>Back to the suspects</Link>
          <button className="button button--negative interrogation__accuse" onClick={this.accuse.bind(this)}>Accuse {suspect.firstName}</button>
        </div>
        { accusation ?
        <div className="interrogation__accusation">
          <Accusation { ...accusation } />
          <div className="button-holder">
            <button className="button button--positive" onClick={() => {this.props.history.push(`/arrest/${personUrl(suspect)}/${weapon}`)}} disabled={this.state.weapon === null}>Arrest Him!</button>
            <button className="button button--negative" onClick={this.cancelAccusation.bind(this)}>Actually, let's hold off</button>
          </div>
        </div>
          : null }
      </div>
      
    );
  }
}

export default Interrogate;