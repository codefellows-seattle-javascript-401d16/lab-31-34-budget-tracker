import React from 'react';
import {shallow} from 'enzyme';

import DashboardContainer from './index.js';
import createAppStore from '../../lib/store.js';

describe('dashboard-container', () => {
  test('it should have category props', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore} />);
    expect(wrapper.props().categories).toEqual([]);
  });

  test('it should be able to create categories', () => {
    let mockStore = createAppStore();
    let wrapper = shallow(<DashboardContainer store={mockStore} />);

    expect(wrapper.props().categories).toEqual([]);
    wrapper.props().categoryCreate({title: 'code camps'});
    let {categories} = mockStore.getState();
    expect(categories[0].title).toEqual('code camps');
  });
});
