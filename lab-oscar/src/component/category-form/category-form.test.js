import React from 'react';
import {mount, unmount} from 'enzyme';
import CategoryForm from './index.js';

describe('testing category form file', () => {
  test('testing connection to file', () => {
    expect(true).toEqual(true);
  })

  test('should invoke onComplete with the state values onSubmit', () => {
    let mockHandleOnComplete = jest.fn();

    let wrapper = mount(
      <CategoryForm onComplete={mockHandleOnComplete} buttonText='submit' />
    )

    let mockState = {Name: 'testing', Budget: 100};
    wrapper.setState(mockState);
    wrapper.find('form').simulate('submit');

    let {calls} = mockHandleOnComplete.mock;
    expect(calls.length).toEqual(1);
    expect(calls[0][0]).toEqual(mockState);
  })

  test('testing onchange should update the inputs', () => {
    let wrapper = mount(
      <CategoryForm onComplete={() => {}} buttonText='submit' />
    )
    let input = wrapper.find('input').nodes[0];
    wrapper.find('input').nodes[0].simulate('change', {
      target: {type: 'text', value: 'testing'}
    })
    console.log('^^^', input);
    expect(wrapper.state('Name')).toEqual('testing')
  })
})
