import { downloadVideo } from 'lib/capture';

export const ADD_ITEM = 'ADD_ITEM';

export function addItem(url) {
  downloadVideo(url);
  return { type: ADD_ITEM, url };
}
