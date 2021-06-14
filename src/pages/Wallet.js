import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddExpense from '../component/FormAddExpense';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    expenses.reduce((acc, current) => {
      // pegar moeda que usuario usou
      const coinUser = current;
      // valores dos valores dos objetos das moedas
      const valuesCoins = Object.values(current.exchangeRates);
      // const
      // values.find(current.currency);

      // encontrar moeda do usuario nos valores dos objetos das moedas;

      // pegar chave da cotaçao(ask);

      // multiplicar o ask pela despesa do usuario(value);

      // depois disto renderizar;
    },
    0);
  }

  render() {
    const { email } = this.props;
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
              Despesa total: 0
              {this.totalExpenses()}
            </section>
            <section data-testid="header-currency-field">
              Câmbio : BRL
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
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
