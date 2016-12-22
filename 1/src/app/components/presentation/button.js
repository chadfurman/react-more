import React, {Component} from 'react';
import classnames from 'classnames';

class Button extends Component {
  render() {
    const classes = classnames('mc-button');

    return (
      <button className={classes} onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired
};

export default Button;
