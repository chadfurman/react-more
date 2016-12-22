import React, {Component} from 'react';
import classnames from 'classnames';

class Footer extends Component {
  render() {
    const classes = classnames('mc-footer');

    return (
      <footer className={classes}>
        This is a footer.  You made this?  I made this!  lol...
      </footer>
    );
  }
}

export default Footer;
