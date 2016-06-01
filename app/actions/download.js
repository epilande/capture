import * as capture from 'lib/capture';

export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_PROGRESS = 'ITEM_PROGRESS';

export function download(url, options, output) {
  return (dispatch, getState) => {
    const { download: { items } } = getState();
    const downloadId = items.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
    console.log('download params: ', url, options, output, downloadId);
    capture.init(url, options, (video) => {
      capture.download(video, output, (info) => {
        dispatch(itemAdd(downloadId, url, info));
        capture.progress(video, info.size, (percent) => {
          dispatch(itemProgress(downloadId, percent));
        });
      });
    });
  };
}

export function itemAdd(id, url, info) {
  return { type: ITEM_ADD, id, url, info };
}

export function itemProgress(id, percent, debounce = 50) {
  return {
    type: ITEM_PROGRESS,
    id,
    percent,
    meta: { debounce: { time: debounce } },
  };
}
