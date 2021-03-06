import React, { Component } from 'react';
import { auth } from '../../firebase';
import './styles.css';
import PropTypes from 'prop-types';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMsg: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.doCreateUserWithEmailAndPassword(email, password)
    /* eslint-disable */
      .catch((error) =>
    /* eslint-enable */
        this.setState({errorMsg: 'User already exists'}));
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { email, password, errorMsg } = this.state;
    return (

      <div className='sign-up-container'>
        <h5>Sign Up</h5>
        <form className='sign-up' onSubmit={this.handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='email'
            value={email}
            onChange={this.handleChange}
            className='sign-up-input'
          />
          <input
            type='password'
            name='password'
            placeholder='password'
            value={password}
            onChange={this.handleChange}
            className='sign-up-input'
          />
          <button className='sign-in-btn' type='submit'>ENTER</button>
        </form>
        {
          errorMsg && <p>{errorMsg}</p>
        }
      </div>
    );
  }
}

SignUpForm.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default SignUpForm;
