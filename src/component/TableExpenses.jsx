import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TableExpenses extends Component {
  // constructor(prop) {
  //   super(prop);
  // }

  render() {
    return (
      <section>
        <table>
          <tr>
            {/* colunas */}
            <th>First name</th>
            <th>Last name</th>
          </tr>
          <tr>
            <td>John</td>
            <td>Doe</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>Doe</td>
          </tr>
        </table>

      </section>
    );
  }
}
