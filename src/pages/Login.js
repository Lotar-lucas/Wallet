import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.validationInputs = this.validationInputs.bind(this);
  }

  validationInputs() {
    const inputEmail = document.querySelectorAll('.input-email');
    console.log(inputEmail[1].value);
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
              required
            />
          </label>
          <button type="button" onClick={ this.validationInputs }>Entrar</button>
        </form>
      </main>

    );
  }
}

export default Login;
