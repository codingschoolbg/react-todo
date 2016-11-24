import React from 'react';

class TodoList extends React.Component {

    render() {
        let { items, removeItem, updateItem } = this.props;

        let itemList = items.map((item) => {
            let itemText = ( item.done ? <s>{item.text}</s> : item.text );

            return (
                <li className="list-group-item" key={item.id}>
                    <span
                        className="list-text"
                        onClick={updateItem.bind(this, item.id)}
                    >{itemText}</span>
                    <button
                        className="btn btn-xs btn-primary pull-right"
                        onClick={removeItem.bind(this, item.id)}
                    >X</button>
                </li>
            );
        });

        return (
            <ul className="list-group">
                {itemList}
            </ul>
        );
    }

}

export default TodoList;
