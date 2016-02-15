import { downloadVideo } from 'lib/capture';

export const ADD_ITEM = 'ADD_ITEM';

export function addItem(url, options, output) {
  downloadVideo(url, options, output);
  return { type: ADD_ITEM, url };
}
