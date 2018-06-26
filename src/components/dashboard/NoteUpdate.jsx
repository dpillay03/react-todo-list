import React from 'react';
import {Link} from 'react-router-dom';

class NoteUpdate extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            title: this.props.title,
            content: this.props.content
        }
        this.saveGoal = this.saveGoal.bind(this);
        this.update = this.update.bind(this);
    }

    saveGoal(ev) {
        ev.preventDefault();
        this.props.edited(ev.target.title.value, ev.target.content.value)
    }

    update(ev) {
        let newState = {};
        newState[ev.target.title, ev.target.content] = ev.target.value;
        this.setState(newState);
      }
    
    
    render() {
        return (
            <form onSubmit={this.saveGoal}>
                <div>Title: 
                    <input type="text" name="title" placholder={this.props.title}/>
                </div>

                <div>Content:
                    <input type="text" name="content" placholder={this.props.content}/>
                </div>
            </form>
        )
    }
}

export default NoteUpdate;