import * as capture from 'lib/capture';

export const ADD_ITEM = 'ADD_ITEM';

export function download(url, options, output) {
  return (dispatch) => {
    console.log('download: ', url, options, output);
    dispatch(addItem(url));
    capture.init(url, options, (video) => {
      capture.download(video, output, (info) => {
        console.log(info);
        capture.progress(video, info.size, (percent) => {
        });
      });
    });
  };
}

export function addItem(url) {
  return { type: ADD_ITEM, url };
}
