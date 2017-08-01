import React from 'react';
import ExpenseCreateForm from '../component/expense-create-form/index.js';
import { shallow } from 'enzyme';

describe('testing ExpenseCreateForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('');
    expect(wrapper.state('price')).toBe(0);
  })

  test('expect submit to invoke handleExpenseCreate', () => {
    let expenseCreate = (expense) => {
      expect(expense.title).toEqual('');
      expect(expense.price).toEqual(0);
    }
    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={expenseCreate} />)
    wrapper.find('form').simulate('submit');
  })
})
