/* eslint strict: 0, no-console: 0 */
import fs from 'fs';
import path from 'path';
import ytdl from 'youtube-dl';

export function downloadVideo(url, options = [], output) {
  console.log('downloadVideo func: ', url, options, output);
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url, options, (err, info) => {
      if (err) {
        reject(err);
      }
      resolve(info);
    });
  }).then((result) => {
    console.log('Then result: ', result);
    const video = ytdl(url, options, { cwd: __dirname });

    video.on('error', (err) => {
      console.log(err);
    });

    video.pipe(fs.createWriteStream(path.resolve(output, `${result.title}.mp4`)));
  }).catch((error) => {
    console.log('Catch: ', error);
  });
}
