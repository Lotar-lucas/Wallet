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
          <label>
            Nome:
            <input type="text" name="name" />
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
