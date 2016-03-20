import { OUTPUT_DIR, CHANGE_QUALITY } from 'actions/settings';

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
    case CHANGE_QUALITY:
      return {
        ...state,
        quality: action.quality,
      };
    default:
      return state;
  }
}
