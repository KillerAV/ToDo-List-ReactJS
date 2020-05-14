import React from 'react';

class ToDoList extends React.Component {
    updateStyle(textStyle, isCompleted) {
        if(isCompleted)
            textStyle.textDecoration = "line-through"
    }
    render() {
        const textStyle = {
            textDecoration: null
        };
        this.updateStyle(textStyle, this.props.listItem.completed);
        return (
            <div className="toDoItem">
                <input  type='checkbox' 
                        id={this.props.listItem.id} 
                        checked={this.props.listItem.completed} 
                        onChange={() => this.props.handleChange(this.props.listItem.id)}/>
                <label id={this.props.listItem.id} style={textStyle}> {this.props.listItem.listItemName} </label>
            </div>
        );
    }
}

export default ToDoList;