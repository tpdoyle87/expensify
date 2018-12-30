import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('it should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
})

test('it should render expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
