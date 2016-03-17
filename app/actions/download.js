import * as capture from 'lib/capture';

export const ADD_ITEM = 'ADD_ITEM';
export const PROGRESS_ITEM = 'PROGRESS_ITEM';

export function download(url, options, output) {
  return (dispatch, getState) => {
    const { download: { items } } = getState();
    const downloadId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
    console.log('download params: ', url, options, output, downloadId);
    capture.init(url, options, (video) => {
      capture.download(video, output, (info) => {
        dispatch(addItem(downloadId, url));
        console.log(info);
        capture.progress(video, info.size, (percent) => {
          dispatch(progress(downloadId, percent));
        });
      });
    });
  };
}

export function addItem(id, url) {
  return { type: ADD_ITEM, id, url };
}

export function progress(id, percent, debounce = 50) {
  return {
    type: PROGRESS_ITEM,
    id,
    percent,
    meta: { debounce: { time: debounce } },
  };
}
