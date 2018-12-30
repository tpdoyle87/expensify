import Dashboard from '../../components/dashboard'
import React from 'react'
import { shallow } from 'enzyme'

test('it should render the dashboard page', () => {
  const wrapper = shallow(<Dashboard />)
  expect(wrapper).toMatchSnapshot();
})
