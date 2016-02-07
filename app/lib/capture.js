/* eslint strict: 0, no-console: 0 */
// import fs from 'fs';
import ytdl from 'youtube-dl';

export function downloadVideo(url) {
  const video = ytdl(url, ['--format=18'], { cwd: __dirname });

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

  // video.pipe(fs.createWriteStream('myvideo.mp4'));
}
