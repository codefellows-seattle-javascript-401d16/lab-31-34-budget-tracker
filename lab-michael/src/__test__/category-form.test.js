import React from 'react'
import {mount} from 'enzyme'
import CategoryForm from './index.js'



describe('testing CategoryForm',()=> {
  test('onComplete should be invoked with the state onSubmit',()=>{
    let mockHandleOnComplete = jest.fn()

    mock.calls == [['hello','cool']]

    let wrapper = mount(<CategoryForm onComplete={mockHandleOnComplete} buttonTest='submit'/>)

    let mockState = {title:'cool beans'}
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let {calls} = mockHandleOnComplete.mockCategory
    expect(calls.length).toEqual(1)
    expect(calls[0][0]).toEqual(mockState)

  })

  test('testing onchange', => {
    let wrapper = mount(
      <CategoryForm onComplete={()=>{}} buttonText='submit'/>
    )
    wrapper.find('input').simulate('change', {
      target: {name: 'title', value:'cool', type:'text'},
    })
    expect(wrapper.state('title')).toEqual('cool')
  })
})
