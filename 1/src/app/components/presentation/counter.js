import React, {Component} from 'react';
import classnames from 'classnames';

class Counter extends Component {
  render() {
    const classes = classnames('mc-counter');

    return (
      <div className={classes}>
        {this.props.counter}
      </div>
    );
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired
};

export default Counter;
