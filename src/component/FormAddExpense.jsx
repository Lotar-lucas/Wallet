import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI, fetchCotation } from '../actions';

class FormAddExpense extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addExpenses = this.addExpenses.bind(this);

    this.state = {
      infoExpenses: {
        value: '',
        description: '',
        currency: '',
        method: '',
        tag: '',
      },
    };
  }

  componentDidMount() {
    const { sendFetch } = this.props;
    sendFetch();
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  }

  addExpenses() {
    const { infoExpenses } = this.state;
    const { cotation } = this.props;
    cotation(infoExpenses);
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="valorExpense">
            Valor
            <input type="number" name="value" id="valorExpense" />
          </label>

          <label htmlFor="description">
            Descrição
            <input name="description" id="description" />
          </label>

          <label htmlFor="coin">
            Moeda
            <select name="currency" id="coin">
              {' '}
              { Object.keys(currencies)
                .filter((coin) => coin !== 'USDT')
                .map((coin) => <option key={ coin } value={ coin }>{ coin }</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment" name="method">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Tag
            <select id="categorie" name="tag">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" value="Enviar" onClick={ this.addExpenses } />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendFetch: () => dispatch(fetchAPI()),
  cotation: (state) => dispatch(fetchCotation(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // id
});

FormAddExpense.propTypes = {
  sendFetch: PropTypes.func.isRequired,
  cotation: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
