import React from 'react';
import ExpenseCreateForm from '../component/expense-create-form/index.js';
import { shallow } from 'enzyme';

describe('testing ExpenseCreateForm', () => {
  test('should have correct default state', () => {
    let wrapper = shallow(<ExpenseCreateForm handleExpenseCreate={() => {}} />)
    expect(wrapper.state('title')).toBe('');
    expect(wrapper.state('price')).toBe(0);
  })
})
