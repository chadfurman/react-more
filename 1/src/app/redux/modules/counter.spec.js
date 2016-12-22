import {Map} from 'immutable';
import counter, * as counterActions from './counter';

describe('counterActions', () => {
  it('should have initial state', () => {
    expect(
      counter(undefined, {}).get('counterActions')
    ).toEqual(
      0
    );
  });

  it('should handle increment', () => {
    expect(
      counter(Map({counterActions: 0}), counterActions.increment()).get('counterActions')
    ).toEqual(
      1
    );
  });

  it('should handle decrement', () => {
    expect(
      counter(Map({counterActions: 1}), counterActions.decrement()).get('counterActions')
    ).toEqual(
      0
    );
  });
});
