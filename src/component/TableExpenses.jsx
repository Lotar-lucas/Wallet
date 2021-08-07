import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_EXPENSES } from '../actions';
// import PropTypes from 'prop-types';

class TableExpenses extends Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    const { expenses } = this.props;

    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
        </tr>
        {
          // const { exchangeRates } = expenses.exchangeRates;
          // console.log(exchangeRates);

          expenses.map(({ id, description, tag, method, value, currency, exchangeRates }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currency}</td>
              <td>{Object.values(exchangeRates).currency.ask}</td>
              {/* <td>{expense.currency}</td> */}
              <td>Real</td>
            </tr>))
        }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpenses.propTypes = {
  expenses: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, null)(TableExpenses);
