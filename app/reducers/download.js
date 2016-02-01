import { ADD_ITEM } from 'actions/download';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          {
            id: state.items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
            url: action.url
          }
        ]
      };
    default:
      return state;
  }
}
