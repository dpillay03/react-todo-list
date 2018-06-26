import React from "react";
import NoteUpdate from './NoteUpdate.jsx'

class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
  }

  handleRemove(ev) {
    return this.props.removeGoal(this.props.note.id)
  }

  toggleEdit() {
    console.log('clicked')
    this.setState({ editing: !this.state.editing })
  }

  finishEdit(goalInfo) {
    console.log('finished: ', goalInfo);
    this.props.removeGoal(goalInfo, this.props.index);
    this.toggleEdit();
  }

  render() {
    return (
        <div className="goal-list" onDoubleClick={this.finishEdit}>
            <h3 id="note-title">{this.props.note.title}</h3>
            <p id="note-list">{this.props.note.content}</p>
            <button id="note-remove" onClick={this.handleRemove}> Delete </button>

        </div>
    )
  }
}
export default NoteItem;