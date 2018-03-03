import React from 'react';
import Avatar from 'avataaars';

const Person = ({
  flag,
  firstName,
  surname,
  height,
  weight,
  avatarProps 
}) =>
  <div className="person">
    <img src={flag} alt="" className="person__flag"/>
    <div className="person__avatar">
      <Avatar { ...avatarProps } />
    </div>
    <p className="person__name">{firstName}<br/>{surname}</p>
    <dl className="person__details">
      <dt className="person__detail-type">Height:</dt>
      <dd className="person__detail-info">{ height }cm</dd>
      <dt className="person__detail-type">Weight:</dt>
      <dd className="person__detail-info">{ weight }kg</dd>
    </dl>
  </div>

export default Person;