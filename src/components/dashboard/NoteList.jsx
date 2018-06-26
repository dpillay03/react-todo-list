import React from 'react';
import NoteItem from './NoteItem.jsx';
import NoteCreateForm from './NoteCreateForm.jsx';

class NoteList extends React.Component {
    constructor(props){
        super(props);
        this.listGoals = this.listGoals.bind(this);
    }

    listGoals() {
        return this.props.notes.map((note) => {
          return <NoteItem note={note} key={note.id} removeGoal={this.props.removeGoal}/>
        });
      }
    render(){
        return (
            <div>
                <p id="goal-header">- Goals -</p>
                <ul>{this.listGoals()}</ul>
            </div>
        )
    }
}

export default NoteList;