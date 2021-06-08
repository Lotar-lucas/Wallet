import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validationInputs = this.validationInputs.bind(this);
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
      buttonLogin.disabled = false;
    }
  }

  render() {
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
              onChange={ this.validationInputs }
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
            disabled
          >
            Entrar
          </button>
        </form>
      </main>

    );
  }
}

export default Login;
