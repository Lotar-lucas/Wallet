import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';

class FormAddExpense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoExpenses: {
        id: ,
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
        exchangeRates: {},
      },
    };
  }

  componentDidMount() {
    const { sendFetch } = this.props;
    sendFetch();
  }

  

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="valorExpense">
            Valor
            <input type="number" name="valorExpense" id="valorExpense" />
          </label>

          <label htmlFor="description">
            Descrição
            <input type="text" name="description" id="description" />
          </label>

          <label htmlFor="coin">
            Moeda
            <select name="coin" id="coin">
              {' '}
              { Object.keys(currencies)
                .filter((coin) => coin !== 'USDT')
                .map((coin) => <option key={ coin } value={ coin }>{ coin }</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment">
              <option value="money">Dinheiro</option>
              <option value="creditCard">Cartão de Crédito</option>
              <option value="debitCard">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Tag
            <select id="categorie">
              <option value="food">Alimentação</option>
              <option value="roby">Lazer</option>
              <option value="job">Trabalho</option>
              <option value="transport">Transporte</option>
              <option value="hearth">Saúde</option>
            </select>
          </label>
          <input type="button" value="Enviar" />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendFetch: () => dispatch(fetchAPI()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

FormAddExpense.propTypes = {
  sendFetch: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
