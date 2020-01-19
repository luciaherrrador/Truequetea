import React from 'react';
import '../stylesheets/App.css';
import Data from '../data/data.json';
import UserList from './UserList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: Data

    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Mi lista de usuarios</h1>
        <UserList users={this.state.users} />
      </div>
    );
  }
}


export default App;
