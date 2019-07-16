import React from 'react';
import { addTodo } from '../Action';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
    constructor (){
        super();
        this.state= {
                value: '',
                completed: false,       
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    addItem = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.value, this.state.completed)
        this.setState({ value: ''})
    }

    render() {
        return(
            <form onSubmit={this.addItem}>
                <input type="text" placeholder="enter your task here..." name="value" className="value-input" value={this.state.value} onChange={this.changeHandler}/>
                <button>Add Todo Item</button>
            </form>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		makeDeposit: (amount, account) => dispatch(makeDeposit(amount, account))
// 	}
// }

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    addTodo: addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);