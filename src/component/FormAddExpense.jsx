import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormAddExpense extends Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
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
              <option value="Felippao">{ }</option>
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

FormAddExpense.propTypes = {
  // email: PropTypes.string.isRequired,
};

export default FormAddExpense;
