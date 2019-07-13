import React from 'react';

class TodoForm extends React.Component {
    constructor (){
        super();
        this.state= {
        value: '',
        completed: false,        
        }
    }

    changeHandler = (event) => {
        event.preventDefault()

        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return(
            <form>
                <input type="text" placeholder="enter your task here..." name="value" className="value-input" value={this.state.value} onChange={this.changeHandler}/>
                <button>Add Todo Item</button>
            </form>
        )
    }
}

export default TodoForm;