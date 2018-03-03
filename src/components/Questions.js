import React, { Component } from 'react';
import Avatar from 'avataaars';
import allQuestions from '../allQuestions.json';

import downloadableData from '../data.csv';

const seeds = [
  "blfstkcvjmnugapeixzqydhwro",
  "jflhdzmywqauckbpxnviesorgt",
  "xgwdornfuyavhzsqmtjbelkipc"
]

const hash = (name, seed) => name.split("").reduce((total, current) => total + (seed.indexOf(current) + 1), 0);
const cleanString = (str) => str.toLowerCase().replace(/[^a-z]/g, '');
const getName = (suspect) => cleanString(suspect.firstName) + cleanString(suspect.surname);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    }
  }

  selectAnswer(question, idx, name) {
    const seed = seeds[idx % seeds.length];
    return question.answers[hash(getName(this.props.suspect), seed) % question.answers.length];
  }

  askQuestion(question, idx) {
    let answer = question.answers[0];
    if (question.answers.length > 1) answer = this.selectAnswer(question, idx);
    
    let response = answer[this.props.suspect.country];
    if (!response) response = answer.en;

    this.setState({
      response
    })
  }

  render() {
    const { suspect } = this.props;
    return (
      <div>
        <div className="questions__main">
          <div className="questions__avatar">
            <Avatar {...suspect.avatarProps} />
          </div>
          <div className="questions__text">
            <p className="questions__response">{ this.state.response }</p>
          </div>
        </div>
        <div className="questions">
          <h3>What would you like to ask {suspect.firstName}?</h3>
          <ul className="questions__list">{ allQuestions.map((question, idx) =>
            <li className="questions__list-item" key={idx}>
              <button className="questions__question" onClick={ this.askQuestion.bind(this, question, idx) }>
                { question.text }
              </button>
            </li> )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Questions;