import React from 'react';
import uuidv1 from 'uuid/v1';

class NoteCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: uuidv1(),
            title: '',
            editing: false,
            content: '',
            completed: false
        }
        this.setGoal = this.setGoal.bind(this);
        this.setDetail = this.setDetail.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
        this.editGoal =  this.editGoal.bind(this);
    }

    setGoal(ev) {
        let setTitle = ev.target.value;
        this.setState({title: setTitle});
    }

    setDetail(ev) {
        let setDetail = ev.target.value;
        this.setState({content: setDetail});
    }

    handleSubmit(ev) {
        ev.preventDefault();
        let newId = uuidv1()
        this.setState({id: newId});
        this.props.newGoalFunc(this.state);
    }

    editGoal(title, index) {
        let newArray = [...this.state.title];
        newArray[index] = goalInfo;
        this.setState({notes: newArray});
        console.log('NEW ARRAY: ', newArray)
      }

    render() {
        return (
            <div>
                <p id="dashSubheader">ADD A NEW GOAL</p>
                <form onSubmit={this.handleSubmit}>
                    <input id="title" onChange={this.setDetail} type="text" placeholder="Type goal here"/>
                    <input id="content" onChange={this.setDetail} type="text" placeholder="Details about goal..."/>
                    <button id="add" type="submit">Add</button>

                </form>
            </div>
        )
    }
}

export default NoteCreateForm;