// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_API, GET_COINS } from '../actions';

const initialState = {
  currencies: [],
  // expenses: [],
};

function Wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_API:
    return action.currencies;

  case GET_COINS:
    return {};
  default:
    return state;
  }
}

export default Wallet;
