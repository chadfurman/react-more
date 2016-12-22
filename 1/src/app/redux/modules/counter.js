import {Map} from 'immutable';
const INCREMENT = 'day1/counter/INCREMENT';
const DECREMENT = 'day1/counter/DECREMENT';

export default function reducer(state = Map({counter: 0}), action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + 1);
    case DECREMENT:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
}

export function increment() {
  return {
    type: INCREMENT
  };
}

export function decrement() {
  return {
    type: DECREMENT
  };
}
