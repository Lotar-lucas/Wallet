import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import addRegisterEmail from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validationInputs = this.validationInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.confirmRedirect = this.confirmRedirect.bind(this);

    this.state = {
      email: '',
      isValid: false,
      canRedirect: false,
    };
  }

  componentDidMount() {
    const buttonLogin = document.querySelector('.button-login');
    buttonLogin.disabled = true;
  }

  validationInputs() {
    const buttonLogin = document.querySelector('.button-login');
    const arrayValuesInputs = document.querySelectorAll('.input-validation');
    const inputEmail = arrayValuesInputs[0].value;
    const inputPassword = arrayValuesInputs[1].value;
    const minLengthPassword = 6;
    if (inputEmail.includes('@')
    && inputEmail.includes('.com')
    && inputPassword.length >= minLengthPassword) {
      // const { isValid } = this.state;
      this.setState({ isValid: true });
      buttonLogin.disabled = false;
    }
  }

  confirmRedirect() {
    const { email } = this.state;
    const { addEmail } = this.props;
    addEmail(email);
    this.setState({ canRedirect: true });
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { canRedirect } = this.state;
    return (
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              className="input-validation"
              data-testid="email-input"
              onChange={ (e) => { this.validationInputs(); this.handleChange(e); } }
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              className="input-validation"
              data-testid="password-input"
              minLength="6"
              onChange={ this.validationInputs }
              required
            />
          </label>
          <button
            type="button"
            className="button-login"
            onClick={ this.confirmRedirect }
          >
            Entrar
          </button>
        </form>
        { (canRedirect) && <Redirect to="/carteira" />}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(addRegisterEmail(email)),
});

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
