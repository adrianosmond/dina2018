import React from 'react';
import Avatar from 'avataaars';

import germanFlag from '../images/flags/de.svg';
import frenchFlag from '../images/flags/fr.svg';
import britishFlag from '../images/flags/gb.svg';
import dutchFlag from '../images/flags/nl.svg';

const flags = {
  de: germanFlag,
  fr: frenchFlag,
  gb: britishFlag,
  nl: dutchFlag
}

const Person = ({
  country,
  firstName,
  surname,
  height,
  weight,
  avatarProps 
}) =>
  <div className="person">
    <img src={flags[country]} alt="" className="person__flag"/>
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