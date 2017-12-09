import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  addCounterItem: PropTypes.func.isRequired,
};

class CounterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const {target: {value: title}} = event;

    this.setState({
      title,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addCounterItem(this.state.title);

    this.setState({
      title: '',
    });
  }
  render() {
    return (
      <div className="CounterForm">
        <form
          className="CounterForm__form"
          onSubmit={this.handleSubmit} >
          <input
            name="title"
            type="text"
            value={this.state.title}
            className="CounterForm__input"
            onChange={this.handleChange} />
          <input
            type="submit"
            className="CounterForm__input-submit"
            value="Add Counter Item" />
        </form>
      </div>
    );
  }
}

CounterForm.propTypes = propTypes;

export default CounterForm;
