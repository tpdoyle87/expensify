import { ExpenseList } from '../../components/ExpenseList'
import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('it should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>)
  expect(wrapper).toMatchSnapshot();
})

test('it should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList />)
  expect(wrapper).toMatchSnapshot();
})
