
import React, { Component, PropTypes } from 'react';

// Single screen, no need to map to routing.
import { Tests } from 'screens/Tests/Tests';

// Primary container component, sets state to the contents of the Socrates
// store on mount and when the store changes.
export class App extends Component {
  componentWillMount () {
    // Map redux dispatch as state.action.
    this.setState({
      action: this.props.store.dispatch,
    });
    // Map store data to state. Don't assume there is a boot state.
    if (typeof this.props.store.getState() !== 'undefined') {
      this.setState(this.props.store.getState());
    }
    // Subscribe to store changes.
    this.props.store.subscribe(s => this.setState(s));
  }

  render () {
    return (
      <div className = "container vspacer20">
        <Tests { ...this.state } />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
