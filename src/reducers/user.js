// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case 'ADD_REGISTER':
    return [...state, action.xxx];
  default:
    return state;
  }
}

export default registerReducer;
