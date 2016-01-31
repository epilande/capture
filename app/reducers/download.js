import { UPDATE_TEXT } from 'actions/download';

const initialState = {
  inputText: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_TEXT:
      return {
        ...state,
        inputText: action.text
      };
    default:
      return state;
  }
}
