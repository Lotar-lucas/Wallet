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
    const { id } = this.props;
    const { infoExpenses } = this.state;

    this.setState({
      infoExpenses: { ...infoExpenses, id, [name]: [value] },
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
            <input type="number" name="value" id="valorExpense" onChange={ this.handleChange } />
          </label>

          <label htmlFor="description">
            Descrição
            <input name="description" id="description" onChange={ this.handleChange } />
          </label>

          <label htmlFor="coin">
            Moeda
            <select name="currency" id="coin" onChange={ this.handleChange }>
              {' '}
              { Object.keys(currencies)
                .filter((coin) => coin !== 'USDT')
                .map((coin) => <option key={ coin } value={ coin }>{ coin }</option>)}
            </select>
          </label>
          <label htmlFor="payment">
            Método de Pagamento
            <select id="payment" name="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
            </select>
          </label>
          <label htmlFor="categorie">
            Tag
            <select id="categorie" name="tag" onChange={ this.handleChange }>
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.addExpenses }>Adicionar despesa</button>
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
  id: state.wallet.expenses.length,
});

FormAddExpense.propTypes = {
  sendFetch: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  cotation: PropTypes.func.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
