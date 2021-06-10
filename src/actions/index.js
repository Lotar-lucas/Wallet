export const ADD_EMAIL_LOGIN = 'ADD_EMAIL_LOGIN';

export const REQUEST_API = 'REQUEST_API';
export const GET_COINS = 'GET_COINS';

export const requestAPI = () => ({ type: REQUEST_API });
export const getCoins = (data) => ({ type: GET_COINS, data });

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all.');
      const data = await response.json();
      dispatch(getCoins(data));
    } catch (error) {
      console.error(error);
    }
  };
}

// ------------------------
// Coloque aqui suas actions
const addRegisterEmail = (value) => ({
  type: ADD_EMAIL_LOGIN,
  email: value,
});

export default addRegisterEmail;
