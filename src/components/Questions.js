import React, { Component } from 'react';
import Avatar from 'avataaars';

import State, { keys } from '../utils/state';
import personUrl from '../utils/utils';
import allQuestions from '../allQuestions.json';
import downloadableData from '../data.csv';

const seeds = [
  "blfstkcvjmnugapeixzqydhwro",
  "jflhdzmywqauckbpxnviesorgt",
  "xgwdornfuyavhzsqmtjbelkipc"
]

const extras = {
  extraInfo: {
    'hermann-koch': () => {
      State.setItem(keys.HAVE_DATA, true);
      return <a href={downloadableData}>Here is a copy for you...</a>
    },
    'horst-hartmann': () => {
      State.setItem(keys.NO_FRENCH, true);
      return null;
    },
    'heinrich-herrmann': () => {
      State.setItem(keys.TOTAL_HEIGHT, true);
      return null;
    },
    'james-ward': () => {
      State.setItem(keys.PSYCHICS, true);
      return null;
    },
    'joshua-hughes': () => {
      State.setItem(keys.MISMATCHED_MOUSTACHES, true);
      return null;
    },
    'karl-klein': () => {
      State.setItem(keys.SIXTY_ONE_KG, true);
      return null;
    },
    'klaus-mayer': () => {
      State.setItem(keys.LARGEST_PERSON, true);
      return null;
    },
    'michael-moore': () => {
      State.setItem(keys.NAME_CHANGE, true);
      return null;
    },
    'nathan-thomas': () => {
      State.setItem(keys.FLAG_MAN, true);
      return null;
    },
    'thijs-jansen': () => {
      State.setItem(keys.LONGEST_NAME, true);
      return null;
    },
    'werner-wagner': () => {
      State.setItem(keys.TOTAL_WEIGHT, true);
      return null;
    },
    'wilhelmus-van-der-veen': () => {
      State.setItem(keys.MODAL_PERSON, true);
      return null;
    },
  }
}

const prerequesits = {
  howMurdered: (person) => {
    if (person === 'pieter-prins') return State.getItem(keys.PSYCHICS);
    if (['bart-de-vries','lewis-moore'].includes(person)) return State.getItem(keys.MISMATCHED_MOUSTACHES);
    return true;
  },
  extraInfo: (person) => {
    if (['daan-dekker','henry-harris','horst-hartmann','heinrich-herrmann',
          'heinrich-hoffmann','karl-klein','michael-moore','werner-wagner',
          'william-wood'].includes(person)) return State.getItem(keys.PSYCHICS);
    if (person === 'thijs-jansen') 
      return State.getItem(keys.TOTAL_HEIGHT) && 
              State.getItem(keys.TOTAL_WEIGHT) && 
              State.getItem(keys.NAME_CHANGE);
    if (person === 'wilhelmus-van-der-veen') return State.getItem(keys.LONGEST_NAME);
    if (person === 'joshua-hughes') return State.getItem(keys.MODAL_PERSON);
    if (person === 'klaus-mayer') 
      return State.getItem(keys.SIXTY_ONE_KG) && State.getItem(keys.NO_FRENCH);
    if (person === 'nathan-thomas') return State.getItem(keys.LARGEST_PERSON);
    if (person === 'heinz-walter') return State.getItem(keys.FLAG_MAN);
    return true;
  },
}

const hash = (name, seed) => name.split("").reduce((total, current) => total + (seed.indexOf(current) + 1), 0);
const cleanString = (str) => str.toLowerCase().replace(/[^a-z]/g, '');
const getName = (suspect) => cleanString(suspect.firstName) + cleanString(suspect.surname);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      responseExtra: null
    }
  }

  randomAnswer(question, idx, name) {
    const seed = seeds[idx % seeds.length];
    return question.answers.default[hash(getName(this.props.suspect), seed) % question.answers.default.length];
  }

  askQuestion(question, idx) {
    const { suspect } = this.props;
    const personId = personUrl(suspect);
    let answer = question.answers[personId];
    if (answer && question.id && prerequesits[question.id]) {
      answer = prerequesits[question.id](personId) && answer;
    }
    
    if (answer) {
      let responseExtra = null;
      if (question.id && 
          extras[question.id] &&
          extras[question.id][personId]) {
        responseExtra = extras[question.id][personId]();
      }
      this.setState({
        response: answer,
        responseExtra
      });
      return;
    }
    
    answer = this.randomAnswer(question, idx);
    
    let response = answer[suspect.country];
    if (!response) response = answer.gb;

    this.setState({
      response,
      responseExtra: null
    })
  }

  render() {
    const { suspect } = this.props;
    return (
      <div className="questions">
        <div className="questions__main">
          <div className="questions__avatar">
            <Avatar {...suspect.avatarProps} />
          </div>
          <div className="questions__text">
            <p className="questions__response">{ this.state.response }{ this.state.responseExtra }</p>
          </div>
        </div>
        <h3>What would you like to ask {suspect.firstName}?</h3>
        <ul className="questions__list">{ allQuestions.map((question, idx) =>
          <li className="questions__list-item" key={idx}>
            <button className="questions__question" onClick={ this.askQuestion.bind(this, question, idx) }>
              { question.text }
            </button>
          </li> )}
        </ul>
      </div>
    );
  }
}

export default Questions;