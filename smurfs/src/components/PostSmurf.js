import React from 'react';
import { connect } from 'react-redux'
import { postSmurf } from '../actions'


class PostSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height:''
  }
  
handleChange = e => {
  e.preventDefault()
  this.setState({ [e.target.name]: e.target.value })
}

addSmurfHandler = e => {
  e.preventDefault()
  const { name, age, height } = this.state
  this.props.postSmurf({ name, age, height })
  this.setState({name: '', age: '', height: ''})
}


  render(){
    console.log('ERROR FROM POST SMURF', this.props.error)
    return (
      <form className="SmurfForm" onSubmit={this.addSmurfHandler}>
      
      <input
        name='name'
        type='text'
        value={this.state.name}
        placeholder='Name'
        onChange={this.handleChange}
      />
      <input 
        name='age'
        type='number'
        value={this.state.age}
        placeholder='Age'
        onChange={this.handleChange}
      />
      <input 
        name='height'
        type='number'
        value={this.state.height} 
        placeholder='Height'
        onChange={this.handleChange}
      />
      <button type="submit">
        {this.props.addingSmurf ? 'Loading': 'Add Smurf'}
      </button>
    </form>
    )
  }
}

const mapStateToProps = state => {
  console.log('STATE FROM POST SMURF', state)
  return {
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  }
}


export default connect(
  mapStateToProps,
  { postSmurf }
)(PostSmurf)

