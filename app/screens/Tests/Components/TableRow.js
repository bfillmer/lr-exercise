
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export class TableRow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0,
      name: '',
      score: 0,
      editing: false,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateStudent = this.updateStudent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentWillMount () {
    this.setState({
      index: this.props.student.index,
      name: this.props.student.name,
      score: this.props.student.score,
    });
  }

  toggleEdit () {
    this.setState({
      editing: !this.state.editing,
    });
  }

  updateStudent () {
    this.props.action({
      type: 'UPDATE_STUDENT',
      payload: {
        index: this.state.index,
        name: this.state.name,
        score: this.state.score,
      },
    });
    this.toggleEdit();
  }

  handleChange (e, which) {
    this.setState({
      [which]: e.target.value,
    });
  }

  handleKeyUp (e) {
    if (e.key === 'Enter') this.updateStudent();
  }

  render () {
    const rowClasses = classNames({
      'table-danger': this.state.score <= 65,
    });

    return (
      <tr className = { rowClasses }>
        <td>
          { !this.state.editing && (
            <a className = "cursor-text" onClick = { this.toggleEdit }>
              { this.state.name }
            </a>
          ) }
          { this.state.editing && (
            <input
              type = "text"
              value = { this.state.name }
              className = "form-control"
              onChange = { (e) => this.handleChange(e, 'name') }
              onKeyUp = { this.handleKeyUp }
              autoFocus
            />
          ) }
        </td>
        <td className = "text-xs-center">
          { !this.state.editing && (
            <a className = "cursor-text" onClick = { this.toggleEdit }>
              { this.state.score }
            </a>
          ) }
          { this.state.editing && (
            <input
              type = "number"
              min = "0"
              max = "100"
              value = { this.state.score }
              className = "form-control"
              onChange = { (e) => this.handleChange(e, 'score') }
              onKeyUp = { this.handleKeyUp }
            />
          ) }
        </td>
        <td className = "text-xs-center">
          { !this.state.editing && (
            <a
              className = "cursor-pointer text-danger"
              onClick = { () => this.props.action({
                type: 'REMOVE_STUDENT',
                payload: {
                  index: this.state.index,
                },
              }) }
            >
              <i className = "fa fa-times-circle"></i>
            </a>
          )}
          { this.state.editing && (
            <button className = "btn btn-primary" onClick = { this.updateStudent }>
              <i className = "fa fa-check" />
            </button>
          ) }
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  action: PropTypes.func.isRequired,
  student: PropTypes.object.isRequired,
};
