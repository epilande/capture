export const OUTPUT_DIR = 'OUTPUT_DIR';
export const CHANGE_QUALITY = 'CHANGE_QUALITY';

export function setOutputDir(output) {
  return { type: OUTPUT_DIR, output };
}

export function changeQuality(quality) {
  return { type: CHANGE_QUALITY, quality };
}
