import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import './setupTest';
describe('<App />', () => {
  test('it should render app correctly', () => {
    const wrapper = shallow(<App></App>);
    expect(wrapper.length).toBe(1);
  });
});
