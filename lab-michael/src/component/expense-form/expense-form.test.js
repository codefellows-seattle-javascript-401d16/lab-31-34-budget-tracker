import React from 'react'
import {mount} from 'enzyme'
import ExpenseForm from './index.js'



describe('testing ExpenseForm',()=> {
  test('onComplete should be invoked with the state onSubmit',()=>{
    let mockHandleOnComplete = jest.fn()

    let wrapper = mount(<ExpenseForm onComplete={mockHandleOnComplete} buttonText='submit'/>)

    let mockState = {title:'cool beans'}
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let {calls} = mockHandleOnComplete.mock
    expect(calls.length).toEqual(1)
    expect(calls[0][0]).toEqual(mockState)

  })

  test('testing title onchange', () => {
    let wrapper = mount(
      <ExpenseForm onComplete={()=>{}} buttonText='submit'/>
    )
    wrapper.find('#title').simulate('change', {
      target: {name: 'title', value:'cool', type:'text'},
    })
    expect(wrapper.state('title')).toEqual('cool')
  })

  test('testing expense onchange', () => {
    let wrapper = mount(
      <ExpenseForm onComplete={()=>{}} buttonText='submit'/>
    )
    wrapper.find('#expense').simulate('change', {
      target: {name: 'expense', value:44, type:'number'},
    })
    expect(wrapper.state('expense')).toEqual(44)
  })
})
