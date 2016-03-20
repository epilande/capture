import { OUTPUT_DIR } from 'actions/settings';

const initialState = {
  output: '',
  format: '',
  quality: 'best',
  qualityOption: [
    {
      text: '144p',
      value: '17',
    }, {
      text: '360p',
      value: '18',
    }, {
      text: '720p',
      value: '22',
    }, {
      text: 'Best',
      value: 'best',
    },
  ],
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
