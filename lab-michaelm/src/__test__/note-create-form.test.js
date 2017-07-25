import React from 'react';
import {shallow} from 'enzyme';
import NoteCreateForm from '../component/note-create-form';

describe('testing NoteCreateForm', () => {

  describe('onChange', () => {
    test('should return correct default state', () => {
      let wrapper = shallow(<NoteCreateForm handleChange={() => {}} />);
      expect(wrapper.state('content')).toBe('');
    });
  });

  describe('onSubmit', () => {
    test('should return correct default state', () => {
      let wrapper = shallow(<NoteCreateForm handleSubmit={() => {}} />);
      expect(wrapper.state('content')).toBe('');
    });
  });
});
