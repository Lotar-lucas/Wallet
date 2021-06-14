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
      const coinUse = current.currency;

      // valores dos valores dos objetos das moedas
      const valuesCoins = Object.values(current.exchangeRates);

      // encontrar moeda do usuario nos valores dos objetos das moedas;
      const dataCoins = valuesCoins.find((e) => e.code === coinUse);

      // pegar chave da cotaçao(ask);
      const askNow = dataCoins.ask;

      // multiplicar o ask pela despesa do usuario(value);
      current.value
      askNow *
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
