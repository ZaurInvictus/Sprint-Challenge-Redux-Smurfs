import React from 'react';
import Loader from 'react-loader-spinner';

class EditForm extends React.Component {
  state = {
    smurf: this.props.smurf
  };

  handleChanges = e => {
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: value
      }
    });
  };

  editSmurf = e => {
    this.props.editSmurf(e, this.state.smurf);
  };

  render() {
    return (
      <div className="edit-form">
        <form className="edit-form" onSubmit={this.editSmurf}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Josh Knell"
            onChange={this.handleChanges}
            value={this.state.smurf.name}
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            placeholder="85"
            onChange={this.handleChanges}
            value={this.state.smurf.age}
          />

          <label htmlFor="height">Height</label>
          <input
            type="text"
            name="height"
            placeholder="josh@lambdaschool.com"
            onChange={this.handleChanges}
            value={this.state.smurf.height}
          />
          <div className="flex-spacer" />

          <button>
            {this.props.editingSmurf ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Save'
            )}
          </button>
        </form>
      </div>
    );
  }
}

export default EditForm;
