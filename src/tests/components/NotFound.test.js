import NotFound from '../../components/NotFound'
import React from 'react'
import { shallow } from 'enzyme'

test('it should render the not found page', () => {
  const wrapper = shallow(<NotFound />)
  expect(wrapper).toMatchSnapshot();
})
