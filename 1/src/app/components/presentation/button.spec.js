import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {Button} from './button';

describe('Button', () => {
  it('should be a button', () => {
    const button = TestUtils.renderIntoDocument(<Button/>);
    const buttonNode = ReactDOM.findDOMNode(button);
    expect(buttonNode.tagName).toEqual('BUTTON');
    expect(buttonNode.className).toEqual('mc-button');
  });

  it('should accept text', () => {
    const button = TestUtils.renderIntoDocument(<Button text="someText"/>);
    const buttonNode = ReactDOM.findDOMNode(button);
    expect(buttonNode.innerText).toEqual('someText');
  });
});
