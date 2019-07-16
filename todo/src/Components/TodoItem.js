import React from 'react';
import { toggleComplete } from '../Action';
import { connect } from 'react-redux';

class TodoItem extends React.Component {

    toggleComplete = () => {
        this.props.toggleComplete(this.props.index)
    }

    render() {
        return (
            <div className={`todo${this.props.item.completed ? " completed" : ""}`} onClick={this.toggleComplete}>
                {this.props.item.value}
            </div>
        )
    }
}

const mapDispatchToProps = {
    toggleComplete: toggleComplete,
}

export default connect(null, mapDispatchToProps)(TodoItem);