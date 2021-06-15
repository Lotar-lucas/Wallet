export const ADD_EMAIL_LOGIN = 'ADD_EMAIL_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';
export const ADD_EXPENSES = 'ADD_EXPENSES';

// export const requestAPI = () => ({ type: REQUEST_API });
// actions que busca moedas da API
export const getCoins = (data) => ({ type: GET_COINS, data });

// actions creators para usar o thunk
export function fetchAPI() {
  return async (dispatch) => {
    try {
      // dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(getCoins(data));
    } catch (error) {
      console.error(error);
    }
  };
}

// ------------------------
// Action que add email ao state do login
const addRegisterEmail = (value) => ({
  type: ADD_EMAIL_LOGIN,
  email: value,
});

export default addRegisterEmail;

export const saveExpense = (expenses, cotation) => ({
  type: ADD_EXPENSES,
  expenses: {
    ...expenses,
    exchangeRates: cotation,
  },
});

export function fetchCotation(expense) {
  return async (dispatch) => {
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const cotation = await response.json();
      dispatch(saveExpense(expense, cotation));
    } catch (error) {
      console.error(error);
    }
  };
}
