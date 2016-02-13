export const OUTPUT_DIR = 'OUTPUT_DIR';

export function setOutputDir(path) {
  return { type: OUTPUT_DIR, path };
}
