/* eslint strict: 0, no-console: 0 */
import fs from 'fs';
import path from 'path';
import ytdl from 'youtube-dl';

export function downloadVideo(url, options = [], output) {
  ytdl.getInfo(url, options, (err, info) => {
    console.log('downloadVideo func: ', url, options, output);
    console.log('getInfo err: ', err);
    if (err) throw err;

    const video = ytdl(url, options, { cwd: __dirname });

    // video.on('error', (err) => {
    //   console.log(err);
    // });

    console.log('getInfo info: ', info);

    // video.on('info', (info) => {
    //   console.log('Download started');
    //   console.log(`filename: ${info._filename}`);
    //   console.log('Info: ', info);
    // });

    video.pipe(fs.createWriteStream(path.resolve(output, `${info.title}.mp4`)));
  });
}
