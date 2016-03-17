import { ADD_ITEM, PROGRESS_ITEM } from 'actions/download';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          {
            id: action.id,
            url: action.url,
          },
        ],
      };
    case PROGRESS_ITEM:
      return {
        items: state.items.map(item => {
          let result;
          if (item.id === action.id) {
            result = { ...item, percent: action.percent };
          }
          return result || item;
        }),
      };
    default:
      return state;
  }
}
