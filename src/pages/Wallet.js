import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddExpense from '../component/FormAddExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);

    this.state = {
      totalExpense: 0,
      exchangeUsed: 'BRL',
    };
  }

  // para passar para o filho
  // handleChange({ target }) {
  //   const { name } = target;
  //   const { value } = target;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

  render() {
    const { email } = this.props;
    const { totalExpense, exchangeUsed } = this.state;
    return (
      <>
        <header>
          <nav>
            <h1>Welcome to your wallet</h1>
            <section data-testid="email-field">
              Seu email:
              {' '}
              {email}
            </section>
            <section data-testid="total-field">
              Despesa total:
              {' '}
              {totalExpense}
            </section>
            <section data-testid="header-currency-field">
              Despesa total:
              {' '}
              {exchangeUsed}
            </section>
          </nav>
        </header>
        <FormAddExpense />
      </>

    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
