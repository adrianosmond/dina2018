const STORAGE_KEY = "___CHORE_WARS_MURDER";

const keys = {
  HAVE_DATA: '_d',
  PSYCHICS: '_p',
  NO_FRENCH: '_f',
  TOTAL_HEIGHT: '_h',
  TOTAL_WEIGHT: '_w',
  NAME_CHANGE: '_n',
  SIXTY_ONE_KG: '_s',
  LONGEST_NAME: '_l',
  MODAL_PERSON: '_m',
  MISMATCHED_MOUSTACHES: '_t',
  LARGEST_PERSON: '_b',
  FLAG_MAN: '_g',
};

const defaultState = Object.keys(keys).reduce((previous, current) =>
  ({ ...previous, [keys[current]]: false }),  
{});

const store = localStorage

class State {
  constructor() {
    try {
      this.state = Object.assign(defaultState, JSON.parse(store.getItem(STORAGE_KEY)));
    } catch (err) {
      this.state = defaultState;
    }
    this.persistState();
  }

  persistState() {
    store.setItem(STORAGE_KEY, JSON.stringify(this.state));
  }

  getItem(key) {
    return this.state[key]
  }

  setItem(key, value) {
    this.state[key] = value;
    this.persistState();
  }

  enoughInfoToComplete() {
    return this.state[keys.MISMATCHED_MOUSTACHES] && this.state.FLAG_MAN;
  }
}

export { keys };

export default new State();