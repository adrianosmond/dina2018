import React from 'react';

import blender from '../images/weapons/blender.svg';
import broom from '../images/weapons/broom.svg';
import cleaningSpray from '../images/weapons/cleaning-spray.svg';
import duster from '../images/weapons/duster.svg';
import hoover from '../images/weapons/hoover.svg';
import iron from '../images/weapons/iron.svg';
import oven from '../images/weapons/oven.svg';
import recycling from '../images/weapons/recycling.svg';
import toiletBrush from '../images/weapons/toilet-brush.svg';
import washingMachine from '../images/weapons/washing-machine.svg';

const weapons = [
  {name: "Blender", id: "blender", img: blender},
  {name: "Broom", id: "broom", img: broom},
  {name: "Cleaning Spray", id: "cleaning-spray", img: cleaningSpray},
  {name: "Duster", id: "duster", img: duster},
  {name: "Hoover", id: "hoover", img: hoover},
  {name: "Iron", id: "iron", img: iron},
  {name: "Oven", id: "oven", img: oven},
  {name: "Recycling", id: "recycling", img: recycling},
  {name: "Toilet Brush", id: "toilet-brush", img: toiletBrush},
  {name: "Washing Machine", id: "washing-machine", img: washingMachine}
]

const WeaponChoice = (props) =>
  <div className="weapon-choice">
    <input className="weapon-choice__input" onChange={props.selectWeapon} type="radio" name="weapon-choice" value={props.id} id={props.id} />
    <label className="weapon-choice__label" htmlFor={props.id}>
      <img className="weapon-choice__img" src={props.img} alt={props.name}/>
      <span className="weapon-choice__name">{props.name}</span>
    </label>
  </div>

const Accusation = (props) =>
  <div className="accusation">
    <h1 className="accusation__title">Accusing {props.name}</h1>
    {props.enoughInfo ? null :
    <p>Are you sure you want to push for his arrest? The rest of the psychic community doesn't think
      you have enough information to go on yet...
    </p>}
    <p>If you want to push for the police to arrest {props.name}, first tell us what weapon he used</p>
    <div className="accusation__weapons">{weapons.map((weapon) => 
      <div className="accusation__weapon" key={weapon.id}>
        <WeaponChoice { ...weapon } selectWeapon={props.selectWeapon} />
      </div>)}
    </div>
  </div>

export default Accusation;