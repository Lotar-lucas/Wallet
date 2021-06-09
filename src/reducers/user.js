// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  user: {
    email: '',
  },
  Wallet: {
    currencies: [],
    expenses: [],
  },
};

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_EMAIL_LOGIN':
    return {
      ...state,
      user: {
        email: action.email,
      },
    };
  default:
    return state;
  }
}

export default registerReducer;
