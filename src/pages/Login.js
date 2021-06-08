import React from 'react';

class Login extends React.Component {
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
              data-testid="email-input"
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              name="password"
              data-testid="password-input"
              minLength="6"
              required
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </main>

    );
  }
}

export default Login;
