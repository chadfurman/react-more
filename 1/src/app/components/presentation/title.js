import React, {Component} from 'react';
import classnames from 'classnames';

class Title extends Component {
  render() {
    const classes = classnames('mc-title');

    return (
      <h2 className={classes}>{this.props.text}</h2>
    );
  }
}

Title.defaultProps = {
  text: "Heading"
};

Title.propTypes = {
  text: React.PropTypes.string
};

export default Title;
