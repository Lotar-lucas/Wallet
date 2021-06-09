// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = [];

function registerReducer(state = initialState, action) {
  switch (action.type) {
  case '':
    return [...state, action.xxx];
  default:
    return state;
  }
}

export default registerReducer;
