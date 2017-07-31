import React from 'react'
import { mount } from 'enzyme'
import CategoryForm from '../component/category-form-component'

describe('testing CategoryForm', () => {
  test('onComplete should be invoked with the state onSubmit', () => {
    let mockHandleOnComplete = jest.fn()

    let wrapper = mount(<CategoryForm onComplete={mockHandleOnComplete} />)

    let mockState = { name: 'car', budget: 500 }
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let { calls } = mockHandleOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)
  })

  test('testing onchange should update the name on the state', () => {
    let wrapper = mount(<CategoryForm onComplete={() => {}} />)
    wrapper.find('input').first().simulate('change', {
      target: { name: 'name', value: 'car', type: 'text' },
    })
    expect(wrapper.state('name')).toEqual('car')
  })
})
