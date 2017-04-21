import React, { Component } from 'react';

import TableContent from './tableContent.jsx'

import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {campers: [], allTimeRanking: true  }
  }

  fetchCampers() {
    axios.get(`https://fcctop100.herokuapp.com/api/fccusers/top/${this.state.allTimeRanking ? 'alltime' : 'recent' }`)
      .then(
        res => {
          const campers = res.data
          this.setState({ campers: campers})
        }
      )
      .catch(err => {console.log(err)})
  }

  handleOnClick = () => {
    this.state.allTimeRanking ? this.setState({allTimeRanking: false}) : this.setState({allTimeRanking: true})

    this.fetchCampers()

    this.forceUpdate()
  }

  componentDidMount() {
    this.fetchCampers()
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
                <th onClick={this.handleOnClick}>Points in last 30 days</th>
                <th onClick={this.handleOnClick}>All time Points</th>
            </tr>
          </thead>

            <TableContent campers={this.state.campers}/>
        </table>
      </div>
    );
  }
}

export default App;
