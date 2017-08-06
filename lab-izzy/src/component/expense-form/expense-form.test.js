import React from 'react';
import {mount} from 'enzyme';
import ExpenseForm from './index.js';

describe('testing ExpenseForm', () => {
  test('onComplete should be invoked with the state on submit', () => {
    let mockHandleOnComplete = jest.fn();

    let wrapper = mount(
      <ExpenseForm onComplete={mockHandleOnComplete} buttonName='submit' />
    );

    let mockState = {name: 'this is silly'};
    wrapper.setState(mockState);

    wrapper.find('form').simulate('submit');

    let {calls} = mockHandleOnComplete.mock;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(mockState);
  });

  test('testing onChange should update the name on the state', () => {
    let wrapper = mount(
      <ExpenseForm onComplete={() => {}} buttonName='submit'/>
    );

    wrapper.find('input').simulate('change', {
      target: {name: 'name', value: 'rent', type: 'text'},
    });

    expect(wrapper.state('name')).toEqual('rent');
  });
});
