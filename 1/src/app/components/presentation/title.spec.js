import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {Title} from './title';

describe('Title', () => {
  it('should be a h2', () => {
    const title = TestUtils.renderIntoDocument(<Title/>);
    const titleNode = ReactDOM.findDOMNode(title);
    expect(titleNode.tagName).toEqual('H2');
    expect(titleNode.className).toEqual('mc-title');
  });

  it('should display the text property', () => {
    const title = TestUtils.renderIntoDocument(<Title text="someText"/>);
    const titleNode = ReactDOM.findDOMNode(title);
    expect(titleNode.innerText).toEqual('someText');
  });
});
