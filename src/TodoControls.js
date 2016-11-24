import React from 'react';

class TodoControls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleInputChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleButtonClick() {
        let { text } = this.state;
        let { addItem } = this.props;

        if ( text.trim() === '' ) return;

        addItem(text);

        this.setState({
            text: ''
        });

        this.input.focus();
    }

    render() {
        let { text } = this.state;
        let { removeCompleted } = this.props;

        return (
            <div>
                <div className="form-group">
                    
                    <input
                        className="form-control"
                        onChange={this.handleInputChange.bind(this)}
                        ref={(input) => this.input = input}
                        value={text}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={this.handleButtonClick.bind(this)}
                >Add todo</button>
                <button
                    className="btn btn-default pull-right"
                    onClick={removeCompleted.bind(this)}
                >Remove completed</button>
            </div>
        );
    }

}

export default TodoControls;
