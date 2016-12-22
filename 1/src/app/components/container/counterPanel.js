import {connect} from 'react-redux';

import Counter from '../presentation/counter';

const CounterPanel = connect(
  state => {
    return {
      counter: state.getIn(['counter', 'counter'])
    };
  },
  () => {}
)(Counter);
export default CounterPanel;
