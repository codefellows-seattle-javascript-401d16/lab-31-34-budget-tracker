
import React from 'React';
import {shallow} from 'enzyme';

import Dashboard from '../component/dashboard/';
import createAppStore from '../lib/store.js';

describe('dashboard-container', () => {
  test('it should have a category props', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<Dashboard store={mockStore} />);
    expect(wrapper.props().categorys).toEqual([]);
  });

  test('it should be able to create categorys', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<Dashboard store={mockStore} />);

    expect(wrapper.props().categorys).toEqual([]);
    wrapper.props().categoryCreate({title: 'cool'});
    let {categorys} = mockStore.getState();
    expect(categorys[0].title).toEqual('cool');
  });
});
