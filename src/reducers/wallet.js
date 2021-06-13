// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_COINS, ADD_EXPENSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

function Wallet(state = initialState, action) {
  switch (action.type) {
  case GET_COINS:
    return {
      ...state,
      currencies: action.data,
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default:
    return state;
  }
}

export default Wallet;
