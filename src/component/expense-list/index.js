import React from 'react';

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
            </li>
          )}
        </ul>
      </div>
    )

  }
}

export default ExpenseList;


//
