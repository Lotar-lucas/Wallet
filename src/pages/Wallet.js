import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <nav>
          <h1>Welcome to your wallet</h1>
          <p>
            Seu emial:
            {' '}
            {email}
          </p>
        </nav>
      </header>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Wallet);
