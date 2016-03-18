import { OUTPUT_DIR } from 'actions/settings';

const initialState = {
  output: '',
  format: '',
  quality: 'best',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OUTPUT_DIR:
      return {
        ...state,
        output: action.output,
      };
    default:
      return state;
  }
}
