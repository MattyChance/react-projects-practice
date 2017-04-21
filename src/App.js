import React, { Component } from 'react';

import TableContent from './tableContent.jsx'

import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {campers: [], allTimeRanking: true  }
  }

  componentDidMount() {

    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${this.state.allTimeRanking ? 'alltime' : 'recent' }`)
      .then(
        res => {
          const campers = res.data
          this.setState({ campers })
        }
      )
      .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <h1>Camper LeaderBoard</h1>
        <table>
          <colgroup span="5"></colgroup>

          <thead>
            <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Username</th>
                <th>Points in last 30 days</th>
                <th>All time Points</th>
            </tr>
          </thead>

            <TableContent campers={this.state.campers}/>
        </table>
      </div>
    );
  }
}

export default App;
