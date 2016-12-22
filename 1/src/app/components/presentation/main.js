import classnames from 'classnames';
import React, {Component} from 'react';

import Header from './header';
import Title from '../presentation/title';
import CounterPanel from './../container/counterPanel';
import IncrementCounter from './../container/incrementCounter';
import DecrementCounter from './../container/decrementCounter';
import Footer from './footer';

class Main extends Component {
  render() {
    const classes = classnames('mc-main');

    return (
      <div className={classes}>
        <Header/>
        <main>
          <Title text="Click buttons below to change counter"/>
          <CounterPanel/>
          <IncrementCounter/>
          <DecrementCounter/>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default Main;
