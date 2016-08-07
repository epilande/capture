/* eslint strict: 0, no-console: 0 */
import fs from 'fs';
import path from 'path';
import ytdl from 'youtube-dl';

export function init(url, settings = {}, callback) {
  const options = [`--format=${settings.quality}`];
  const video = ytdl(url, options, { cwd: __dirname });

  video.on('error', (err) => {
    return callback(err, video);
  });

  return callback(null, video);
}

export function download(video, output, callback) {
  video.on('info', (info) => {
    const filename = info.title.replace(/[^a-z0-9\_\-\ ]/gi, '');
    const file = path.resolve(output, `${filename}.mp4`);
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
