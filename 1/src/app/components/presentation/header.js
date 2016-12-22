import React, {Component} from 'react';
import classnames from 'classnames';

class Header extends Component {
  render() {
    const classes = classnames('mc-header');

    return (
      <header className={classes}>
        <h1>Mah Counter</h1>
      </header>
    );
  }
}

export default Header;
