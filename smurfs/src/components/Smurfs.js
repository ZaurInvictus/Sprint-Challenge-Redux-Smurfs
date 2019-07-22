import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getSmurfs, editSmurf, deleteSmurf } from '../actions'
import EditForm from './EditForm'


class Smurfs extends Component {
  state = {
    deletingSmurf: null,
    editingSmurfId: null
  }

componentDidMount() {
  this.props.getSmurfs()
}

editSmurf = (e, smurf) => {
  e.preventDefault();
  this.props.editSmurf(smurf).then(() => {
    this.setState({ editingSmurfId: null });
  })}

removeSmurf = id => {
  this.setState({ deletingSmurfId: id });
  this.props.deleteSmurf(id);
}

  render() {
    if(this.props.fetchingSmurfs) {
      return <h1>Loading...</h1>
    }
    return(
      <div> 
        {this.props.error && this.props.error}
        {this.props.smurfs.map( smurf => {
  
          if (this.state.editingSmurfId === smurf.id) {
              return (
                <div className="friend-card" key={smurf.id}>
                  <EditForm
                    smurf={smurf}
                    editSmurf={this.editSmurf}
                    editingSmurf={this.props.editingSmurf}
                  />
                </div>
              );
            }
  
        return (
           <div className="smurf-card" key={smurf.id}>
            
                  <h3>{smurf.name}</h3>
                  <p>Age: {smurf.age}</p>
                  <p>Height: {smurf.height}</p>
                  
                  {this.props.deletingSmurf &&
                  this.state.deletingSmurfId === smurf.id && (
                    <p>Deleting Smurf 👋</p>
                  )}
  
                <i
                  className="fas fa-pencil-alt"
                  onClick={() => this.setState({ editingSmurfId: smurf.id })}
                />
          
               <i
                 className="fas fa-times"
                 onClick={() => this.removeSmurf(smurf.id)}
               />
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
    editingSmurf: state.editingSmurf,
    deletingSmurf: state.deletingSmurf
  }
}

export default connect(
    mapStateToProps,
    { getSmurfs, editSmurf, deleteSmurf }
  )(Smurfs)
