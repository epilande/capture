import * as capture from 'lib/capture';

export const ADD_ITEM = 'ADD_ITEM';
export const PROGRESS_ITEM = 'PROGRESS_ITEM';

export function download(url, options, output) {
  return (dispatch, getState) => {
    const downloadState = getState().download;
    const downloadId = downloadState.items.reduce((maxId, item) =>
                                                  Math.max(item.id, maxId), -1) + 1;
    console.log('download: ', url, options, output, downloadId);
    dispatch(addItem(downloadId, url));
    capture.init(url, options, (video) => {
      capture.download(video, output, (info) => {
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
