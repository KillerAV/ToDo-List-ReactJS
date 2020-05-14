import React from 'react';
import ToDoList from './ToDoList';
import ListData from './ListData';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            listData: ListData 
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(function(prevState) {
            return prevState.listData.map(function(data) {
                if(data.id === id) {
                    if(data.completed)
                        data.completed = false;
                    else
                        data.completed = true;
                }
                return data;
            });
        });
    }

    render() {
        const ListComponents = this.state.listData.map(data => <ToDoList id={data.id} listItem={data} handleChange={this.handleChange} />);
        return (
            <div className="toDoList">
                {ListComponents}
            </div>
        );
    }
}

export default Main;