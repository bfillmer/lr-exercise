
import React, { Component, PropTypes } from 'react';

// @NOTE This thing is kind of huge, and the validation is not completely
// foolproof, but it will do for now.

export class AddTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      valid: null,
      name: '',
      score: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.attemptAdd = this.attemptAdd.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  handleNameChange (e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleScoreChange (e) {
    this.setState({
      score: e.target.value,
    });
  }

  attemptAdd () {
    if (this.checkValidity()) {
      this.addStudent();
      this.setState({
        valid: 'isValid',
        name: '',
        score: '',
      });
    } else {
      this.setState({
        valid: 'notValid',
      });
    }
  }

  checkValidity () {
    const intScore = parseInt(this.state.score, 10);
    // Check that we have values and that the score is numeric.
    return this.state.name.length > 0
      && this.state.score.length > 0
      && !isNaN(intScore)
      && intScore <= 100
      && intScore >= 0;
  }

  addStudent () {
    this.props.action({
      type: 'ADD_STUDENT',
      payload: {
        name: this.state.name,
        score: this.state.score,
      },
    });
  }

  render () {
    return (
      <div className = "card card-inverse card-info">
        <div className = "card-block">
          <form onSubmit = { this.attemptAdd }>
            <h4 className = "card-title">Add Student Test Score</h4>
            <div className = "form-group row m-t-2">
              <label htmlFor = "student-name" className = "col-md-2 form-control-label">
                Name
              </label>
              <div className = "col-md-10">
                <input
                  type = "text"
                  className = "form-control"
                  id = "student-name"
                  value = { this.state.name }
                  onChange = { this.handleNameChange }
                />
              </div>
            </div>
            <div className = "form-group row">
              <label htmlFor = "student-test-score" className = "col-md-2 form-control-label">
                Score
              </label>
              <div className = "col-md-3">
                <input
                  type = "number"
                  className = "form-control"
                  id = "student-test-score"
                  value = { this.state.score }
                  onChange = { this.handleScoreChange }
                />
              </div>
            </div>
            <div className = "row vertical-align">
              <div className = "col-md-3 col-md-offset-2">
                <button
                  type = "button"
                  className = "btn btn-primary"
                  onClick = { this.attemptAdd }
                >
                  <i className = "fa fa-plus"></i> Add
                </button>
              </div>
              <div className = "col-md-7">
                { this.state.valid === 'isValid' && (<span className = "text-success">
                  <i className = "fa fa-check"></i> Student Added
                </span>) }
                { this.state.valid === 'notValid' && (<span className = "text-warning">
                  <i className = "fa fa-times"></i> Please review form input.
                </span>) }
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddTest.propTypes = {
  action: PropTypes.func.isRequired,
};
