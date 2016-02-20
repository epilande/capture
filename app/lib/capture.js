/* eslint strict: 0, no-console: 0 */
import fs from 'fs';
import path from 'path';
import ytdl from 'youtube-dl';

export function init(url, options = [], callback) {
  const video = ytdl(url, options, { cwd: __dirname });
  console.log('downloadVideo func: ', url, options);

  video.on('error', (err) => {
    console.log(err);
  });

  return callback(video);
}

export function download(video, output, callback) {
  video.on('info', (info) => {
    const file = path.resolve(output, `${info.title}.mp4`);
    video.pipe(fs.createWriteStream(file));

    return callback(info);
  });
}

export function progress(video, size, callback) {
  let pos = 0;
  video.on('data', (chunk) => {
    pos += chunk.length;
    if (size) {
      const percent = (pos / size * 100).toFixed(2);

      return callback(percent);
    }
  });
}
