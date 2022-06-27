import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from "../todo-add/index";
import './app.css';

class App extends React.Component {
    state = {
        todos: [
            { id: 1, label: 'Мираш', important: false,  done: false },
            { id: 2, label: 'Мирай', important: false,  done: false },
            { id: 3, label: 'Мираида', important: false,  done: false },
            { id: 4, label: 'Мираида Гр', important: false,  done: false },
            { id: 5, label: 'Мирайка', important: false,  done: false }
        ],
        filter: 'all',
        searchString: '',
    }

    onDelete = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === id)
            const prev = oldState.todos.slice(0, idx)
            const next = oldState.todos.slice(idx + 1)

            return {
                todos: [...prev, ...next]
            }

        })
    }

    onImportant = (id) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === id)
            const prev = oldState.todos.slice(0, idx)
            const current = oldState.todos[idx]
            const next = oldState.todos.slice(idx + 1)

            return {
                todos:
                    [...prev,
                        {...current, important: !current.important},
                    ...next]
            }
        })
    }

    onDone = (doneId) => {
        this.setState((oldState) => {
            const idx = oldState.todos.findIndex((item) => item.id === doneId)
            const prev = oldState.todos.slice(0, idx)
            const current = oldState.todos[idx]
            const next = oldState.todos.slice(idx + 1)

            return {
                todos:
                    [...prev,
                        {...current, done: !current.done},
                        ...next]
            }
        })
    }


    onFilter = (status) => {
        this.setState({
            filter: status
        })
    }

    onStatusFilter = (todos, status) => {
        if (status === 'active') {
            return todos.filter((item) => item.done === false)
        }else if (status === 'done') {
            return todos.filter((item) => item.done === true)
        }else {
            return todos
        }
    }

    onSearchChange = (searchString) => {
        this.setState({
            searchString: searchString
        })
    }

    onSearchFilter = (todos, searchString) => {
        const result = todos.filter((todo) => todo.label.toLowerCase().includes(searchString.toLowerCase()))
        return result
    }

    addNewTodo = (labelText) => {
        this.setState((oldState) => {
            let itemsId = oldState.todos.map(item => item.id)
            if (itemsId.length === 0) {
                itemsId = []
            }
           let newId = itemsId.length + 1
            const newTodo = {
                id: newId + 1,
                label: labelText,
                important: false,
                done: false
            }
            console.log(newId)
            return {todos: [...oldState.todos, newTodo]}
        })
    }

render() {
        const filteredTodos = this.onStatusFilter(this.state.todos, this.state.filter)
        const filteredBySearchTodos = this.onSearchFilter(filteredTodos, this.state.searchString)

        const doneTodo = this.state.todos.filter((todo) => todo.done)
    return (
        <div className="todo-app">
            <AppHeader toDo={this.state.todos.length} done={doneTodo.length} />
            <div className="top-panel d-flex">
                <SearchPanel onSearchChange={this.onSearchChange} onSearchFilter={this.onSearchFilter} />
                <ItemStatusFilter filter={this.state.filter} onFilter={this.onFilter}/>
            </div>
            <TodoAdd addNewTodo={this.addNewTodo} />
            <TodoList
                onDone={this.onDone}
                onDelete={this.onDelete}
                onImportant={this.onImportant}
                todos={filteredBySearchTodos} />
        </div>
    );
}
}

export default App;
