import React from 'react';
import './todo-add.css'

class TodoAdd extends React.Component{
    state = {
        label: '',
    }

    onValueChange = (text) => {
        this.setState({
            label: text.toLowerCase()
        })
    }

    onAddNewTodo = (e) => {
        if (this.state.label === '') {
            alert('Please write something in the input')
        }else {
            this.props.addNewTodo(this.state.label)
        }
        e.preventDefault()
        this.setState({label: ''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddNewTodo}>
                    <input
                        onChange={(e) => {
                            this.onValueChange(e.target.value)
                        }}
                        value={this.state.label}
                        type="text"
                        placeholder='Feel the todo'
                        className='add-input'
                    />
                    <input
                        type="submit"
                        value='add'
                        className='add'
                    />
                </form>
            </div>
        );
    }
}

export default TodoAdd;