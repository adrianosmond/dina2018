import React from 'react';
import { withRouter } from 'react-router-dom';

const Result = (props) => {
  console.log(props.match.params)
  const wasSuccessful = 
    props.match.params.suspect === 'jacques-chevalier' &&
    props.match.params.weapon === 'hoover';
  if (wasSuccessful) return (
    <div className="result result--success">
      <div className="result__content">
        <h1 className="result__title">Congratulations</h1>
        <p className="result__explanation">You proved to be a master detective with a great handle on the paranormal.
            We hope you'll be able to help us out more in the future...</p>
        <div className="result__gift"><span role="img" aria-labelledby="Gift">🎁</span></div>
      </div>
    </div>
  )
  return (
    <div className="result result--failure">
      <div className="result__content">
        <h1 className="result__title">Oh no...</h1>
        <p className="result__explanation">You've accused an innocent man. The tabloids are on the way to write about the plight of this poor white man at the hands of a feminazi.</p>
        <div className="result__back">
          <button className="button result__back-button" onClick={() => { props.history.goBack() }}>Go back and try again</button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Result);