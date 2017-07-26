import React from 'react';
import {mount} from 'enzyme';
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

    wrapper.find('input').simulate('change', {
      target: {name: 'Name', type: 'text', value: 'testing'}
    })
    expect(wrapper.state('Name')).toEqual('testing')
  })
})
