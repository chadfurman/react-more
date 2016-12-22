import {connect} from 'react-redux';

import Button from '../presentation/button';

import * as counterActions from '../../redux/modules/counter';

const DecrementCounter = connect(
  () => {
    return {
      text: 'Decrement'
    };
  },
  dispatch => {
    return {
      onClick() {
        dispatch(counterActions.decrement());
      }
    };
  }
)(Button);
export default DecrementCounter;
