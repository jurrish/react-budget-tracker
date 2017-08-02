import React from 'react';
import ExpenseCreateForm from '../expense-create-form/index.js';

class ExpenseList extends React.Component {
  render () {

    return (
      <div className='expense-list-container'>
        <ul>
          { this.props.expenses.map((item, i) =>
            <li key={i}>
            <button
              onClick={ () => this.props.expenseRemove(item) }>
              delete
            </button>
            <p> title: {item.title} </p>
            <p> price: {item.price} </p>

            <ExpenseCreateForm expenseCreate={ (expense) => {
              expense.id = item.id
              this.props.expenseUpdate(expense)
            }} />
            </li>
          )}
        </ul>
      </div>
    )

  }
}

export default ExpenseList;


//
