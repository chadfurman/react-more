import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {Main} from './main';
import {Footer} from './footer';
import {Header} from './header';
import {Counter} from './../container/counter';
import {Button} from './button';
import {Title} from './title';

describe('Main', () => {
  it('should have a main', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    const mainNode = ReactDOM.findDOMNode(main);
    expect(mainNode.tagName).toEqual('DIV');
    expect(mainNode.className).toEqual('mc-main');
  });

  it('should have a header', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedComponentsWithType(main, Header).length).toEqual(1);
  });

  it('should have a main', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(main, 'MAIN').length).toEqual(1);
  });

  it('should have a title', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedComponentsWithType(main, Title).length).toEqual(1);
  });

  it('should have a counter', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedComponentsWithType(main, Counter).length).toEqual(1);
  });

  it('should have a footer', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedComponentsWithType(main, Footer).length).toEqual(1);
  });

  it('should have buttons', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    expect(TestUtils.scryRenderedComponentsWithType(main, Button).length).toEqual(2);
  });
});
