import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {Header} from './header';

describe('Header', () => {
  it('should be a header', () => {
    const header = TestUtils.renderIntoDocument(<Header/>);
    const headerNode = ReactDOM.findDOMNode(header);
    expect(headerNode.tagName).toEqual('HEADER');
    expect(headerNode.className).toEqual('mc-header');
  });

  it('should have an h1', () => {
    const header = TestUtils.renderIntoDocument(<Header/>);
    expect(TestUtils.scryRenderedDOMComponentsWithTag(header, 'H1').length).toEqual(1);
  });
});
