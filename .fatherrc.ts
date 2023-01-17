import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  umd: { output: 'dist/style' },
  esm: { output: 'dist' },
});
