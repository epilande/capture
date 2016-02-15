/* eslint strict: 0, no-console: 0 */
// import fs from 'fs';
// import path from 'path';
import ytdl from 'youtube-dl';

export function downloadVideo(url, options = [], output) {
  const video = ytdl(url, options, { cwd: __dirname });

  video.on('error', (err) => {
    console.log(err);
  });

  // ytdl.getInfo('https://www.google.com', ['--format=18'], (err, info) => {
  //   console.log(err);
  //   if (err) throw err;

  //   console.log(info);
  // });

  // Will be called when the download starts.
  video.on('info', (info) => {
    console.log('Download started');
    console.log(`filename: ${info._filename}`);
    console.log('Info: ', info);
  });

  // video.pipe(fs.createWriteStream(path.resolve(output, 'myvideo.mp4')));
}
