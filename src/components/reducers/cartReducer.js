import initialState from './initialState';

export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    default:
      return state;
  }
};
