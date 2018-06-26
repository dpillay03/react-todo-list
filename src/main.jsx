import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Landing from './components/Landing.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx';

import './style/main.scss';

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        header: 'Execute - Track Your Goals!'
        }
    }
      
    render(){
        return <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Landing</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                
                <h1>{this.state.header}</h1>
                <Route exact path="/" component={Landing} />
                <Route path="/dashboard" component={Dashboard} />
            </div>
        </Router>
        
    }
}

  const root = document.getElementById('root');
  ReactDOM.render(<App/>, root);