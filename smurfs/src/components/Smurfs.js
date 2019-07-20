import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'


class Smurfs extends Component {

componentDidMount() {
  this.props.getSmurfs()
}

  render() {
    if(this.props.fetchingSmurfs) {
      return <h2>Loading...</h2>
    }
    if(this.props.error) {
      return <h2>{this.props.error}</h2>
    }
    return (
      <div>
      {/* {this.props.error && this.props.error} */}
        { this.props.smurfs.map( smurf => {
          return (
           <div className="smurf-card" key={smurf.id}>
             <h4>Name: {smurf.name}</h4>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
           </div>
          )
        })}

      </div>
    )
   }
 }

const mapStateToProps = state => {

  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    deletingSmurf: state.deletingSmurf
  }
}

export default connect(
    mapStateToProps,
    { getSmurfs }
  )(Smurfs)
