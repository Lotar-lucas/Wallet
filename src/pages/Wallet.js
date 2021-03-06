import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FormAddExpense from '../component/FormAddExpense';
import TableExpenses from '../component/TableExpenses';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.totalExpenses = this.totalExpenses.bind(this);
  }

  totalExpenses() {
    const { expenses } = this.props;
    const result = expenses.reduce((acc, current) => {
      // pegar moeda que usuario usou
      const coinUse = current.currency;
      // valores dos valores dos objetos das moedas
      const valuesCoins = Object.values(current.exchangeRates);
      // encontrar moeda do usuario nos valores dos objetos das moedas;
      const dataCoins = valuesCoins.find((e) => e.code === coinUse);
      // pegar chave da cotaçao(ask);

      const askNow = dataCoins.ask;
      // multiplicar e tratar o ask pela despesa do usuario(value);
      const userExpense = current.value;
      const resultExpenses = askNow * userExpense;
      acc += resultExpenses;
      return acc;
      // depois disto renderizar;
    },
    0);
    const precision = 2;
    return result.toFixed(precision);
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
              Despesa total:
              {' '}
              {this.totalExpenses()}
            </section>
            <section data-testid="header-currency-field">
              Câmbio : BRL
            </section>
          </nav>
        </header>
        <main>
          <FormAddExpense />
          <TableExpenses />
        </main>
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
  expenses: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
