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
        id: 0,
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
        description: '',
      },
    };
  }

  componentDidMount() {
    const { sendFetch } = this.props;
    // coloca os tipos de moedas no select do imput moeda
    sendFetch();
  }

  handleChange({ target }) {
    const { name } = target;
    const { value } = target;
    const { idExpense } = this.props;
    const id = idExpense;
    const { infoExpenses } = this.state;
    this.setState({
      infoExpenses: { ...infoExpenses, id, [name]: value },
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
      <section>
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="number"
              name="value"
              id="valor"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="descricao">
            Descrição
            <input name="description" id="descricao" onChange={ this.handleChange } />
          </label>
          <label htmlFor="moeda">
            Moeda
            <select name="currency" id="moeda" onChange={ this.handleChange }>
              {' '}
              { Object.keys(currencies).filter((coin) => coin !== 'USDT')
                .map((coin) => <option key={ coin } value={ coin }>{ coin }</option>)}
            </select>
          </label>
          <label htmlFor="método de pagamento">
            método de pagamento
            <select id="método de pagamento" name="method" onChange={ this.handleChange }>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de Crédito</option>
              <option value="Cartão de débito">Cartão de Débito</option>
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
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendFetch: () => dispatch(fetchAPI()),
  cotation: (state) => dispatch(fetchCotation(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  idExpense: state.wallet.expenses.length,
});

FormAddExpense.propTypes = {
  sendFetch: PropTypes.func.isRequired,
  cotation: PropTypes.func.isRequired,
  idExpense: PropTypes.number.isRequired,
  currencies: PropTypes.objectOf(PropTypes.object.isRequired).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAddExpense);
