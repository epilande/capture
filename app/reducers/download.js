import { ITEM_ADD, ITEM_FAIL, ITEM_PROGRESS } from 'actions/download';

const initialState = {
  items: [],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ITEM_ADD:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            url: action.url,
            info: action.info,
          },
        ],
      };
    case ITEM_FAIL:
      return {
        ...state,
        error:  action.error,
      };
    case ITEM_PROGRESS:
      return {
        ...state,
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
