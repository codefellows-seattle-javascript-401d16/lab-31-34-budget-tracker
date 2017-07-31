// import React from 'react';
// import {mount} from 'enzyme';
// import CategoryForm from './index.js';
//
// describe('testing CategoryForm', () => {
//   test('onComplete should be invoked with the state onSubmit', () => {
//
//     let mockHandleOnComplete = jest.fn();
//
//
//     let wrapper = mount(
//       <CategoryForm onComplete={mockHandleOnComplete} buttonTest='submit' />
//     );
//
//
//     let mockState ={title: 'food', budget: 200};
//     wrapper.setState(mockState);
//
//
//     wrapper.find('form').simulate('submit');
//
//
//     let {calls} = mockHandleOnComplete.mock;
//     expect(calls.length).toBe(1);
//     expect(calls[0][0]).toEqual(mockState);
//   });
//
//
// });
