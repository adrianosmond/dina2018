import data from 'dataForGeneration.json';

const NUM_PEOPLE = 250;

const selectFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generatePerson = () => {
  const country = selectFromArray(data.countries);
  const hairColor = selectFromArray(['Auburn','Black','Blonde','BlondeGolden','Brown','BrownDark','Platinum','Red','SilverGray']);
  return {
    country,
    firstName: selectFromArray(data.firstNames[country]),
    surname: selectFromArray(data.surnames[country]),
    height: 180,
    weight: 70,
    avatarProps: {
      accessoriesType: selectFromArray(['Prescription01','Prescription02','Round',,,,,,,,,]),
      clotheColor: selectFromArray(['Black','Blue01','Blue02','Blue03','Gray02','Heather','PastelBlue','PastelGreen','PastelYellow','Red']),
      clotheType: selectFromArray(['BlazerShirt','BlazerSweater','CollarSweater','Hoodie','Overall','ShirtCrewNeck','ShirtScoopNeck','ShirtVNeck']),
      eyebrowType: selectFromArray(['DefaultNatural','FlatNatural','UnibrowNatural']),
      facialHairType: selectFromArray(['Blank','Blank','Blank','Blank','Blank','Blank','Blank','Blank','BeardMedium','BeardLight','BeardMagestic','MoustacheFancy','MoustacheMagnum']),
      facialHairColor: hairColor,
      hairColor,
      mouthType: 'Serious',
      skinColor: selectFromArray(['Light','Pale']),
      topType: selectFromArray(['NoHair','Eyepatch','LongHairBun','LongHairDreads','LongHairFro','LongHairNotTooLong','ShortHairDreads01','ShortHairDreads02','ShortHairFrizzle','ShortHairShaggyMullet','ShortHairShortCurly','ShortHairShortFlat','ShortHairShortRound','ShortHairShortWaved','ShortHairSides','ShortHairTheCaesar','ShortHairTheCaesarSidePart']),
    }
  }
}

export const generatePeople = () => {
  const people = [];
  for (let i=0; i<NUM_PEOPLE; i++) {
    people.push(generatePerson());
  }
  return people;
};