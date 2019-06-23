import '../../setupTest';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import Navigation from '../index';

describe('<Navigation />', () => {
  test('it should render app correctly', () => {
    const wrapper = shallow(<Navigation></Navigation>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
