import React from 'react';

class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange (e) {
    //whatever the input name is will be the part of the state we are updating
    //the react component properties/attributes have name properties! (look at the input elements and they have name props, so we can pass those in as variables)

    let {name, value, type} = e.target;

    if(type === 'number') {
      try {
        this.setState({
          //value of the variable name as the key!
          //if we put name: instead of [name]:, it would just reset the value instead of using [name] as a key.
          [name]: parseInt(value),
        })
      } catch (err) {
        console.error(err)
      }
    } else {
      this.setState({
        [name]: value,
      })
    }
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.expenseCreate(this.state);
  }

  render () {
    return (
      <form onSubmit = { this.handleSubmit } >
        <input
          name='title'
          type='text'
          value={ this.state.title }
          onChange={ this.handleChange }
        />
        <input
          name='price'
          type='number'
          value={ this.state.price }
          onChange={ this.handleChange }
        />
        <button type='submit'> +Add Expense </button>
      </form>
    )
  }
}

export default ExpenseCreateForm;
