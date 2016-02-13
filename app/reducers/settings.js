import { OUTPUT_DIR } from 'actions/settings';

const initialState = {
  path: '',
  format: '',
  quality: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OUTPUT_DIR:
      return {
        ...state,
        path: action.path
      };
    default:
      return state;
  }
}
