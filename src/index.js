// Import React library
import React from 'react';
import ReactDOM from 'react-dom';
import TodoControls from './TodoControls';
import TodoList from './TodoList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    addItem(text) {
        let items = this.state.items.concat({
            id: Date.now(),
            text,
            done: false
        });

        this.setState({
            items
        });
    }

    removeItem(id) {
        let items = this.state.items.filter((item) => item.id !== id);

        this.setState({
            items
        });
    }

    updateItem(id) {
        let items = this.state.items.map((item) => {
            if ( item.id === id ) item.done = !item.done;

            return item;
        });

        this.setState({
            items
        });
    }

    removeCompleted() {
        let items = this.state.items.filter((item) => !item.done);

        this.setState({
            items
        });
    }

    render() {
        let { items } = this.state;

        return (
            <div className="main">
                <h1>React todo</h1>
                <TodoControls
                    addItem={this.addItem.bind(this)}
                    removeCompleted={this.removeCompleted.bind(this)}
                />
                <TodoList
                    removeItem={this.removeItem.bind(this)}
                    updateItem={this.updateItem.bind(this)}
                    items={items}
                />
            </div>
        );
    }

}

// Get app DOM element
const app = document.getElementById('app');

// Render the app
ReactDOM.render(<App />, app);
