import {connect} from 'react-redux';

import Button from '../presentation/button';

import * as counterActions from '../../redux/modules/counter';

const IncrementCounter = connect(
  () => {
    return {
      text: 'Increment'
    };
  },
  dispatch => {
    return {
      onClick() {
        dispatch(counterActions.increment());
      }
    };
  }
)(Button);
export default IncrementCounter;
