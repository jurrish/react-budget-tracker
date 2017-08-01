import React from 'react';
import uuid from 'uuid/v1';
import ExpenseCreateForm from '../expense-create-form/index.js';

class DashboardContainer extends React.Component {
  //will have VIEW state
  constructor(props){
    super(props);
    console.log('app', this.props)

    this.expenseCreate = this.expenseCreate.bind(this);
  }

  //expense will have a id, title, and price
  expenseCreate (expense) {
    expense.id = uuid();
    //use the method we passed down from app (through this.props.app.setState) and take a previous state and return an object with a modified expenses property which is an array with the new expense in it (using es6 spread syntax)
    this.props.app.setState( state => ({
      //push old expenses (spread them into a new array and add the new expense) through the state passer function we built and passed down through this.props.app.setState
      //spread operator creates a new array/reference of the original. does not modify in place!
      //the return value is [old state.expenses, new expense "pushed" into expenses property value]
        expenses: [...state.expenses, expense]
    }))
  }

  render () {
    return (
      <div>
        <ExpenseCreateForm handleExpenseCreate={ this.expenseCreate } />
        <p> I am the dashboard </p>
      </div>
    )
  }
}

export default DashboardContainer;
