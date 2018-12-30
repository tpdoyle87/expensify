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

test('it should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot();
})

test('it should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'new description'
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
  expect(wrapper).toMatchSnapshot();
})

test('it should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = "This is the new note"
  expect(wrapper).toMatchSnapshot();
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('note')).toBe(value)
  expect(wrapper).toMatchSnapshot();
})

test('it should set state of the amount', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = "45.51"
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(value)
  expect(wrapper).toMatchSnapshot();
})

test('it should not set the state of invalid amount input', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = "abc.22"
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('amount')).toBe(0)
  expect(wrapper).toMatchSnapshot();
})
