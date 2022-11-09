export default {
  input: [`lib/index.js`, 'lib/forward.js', 'lib/inverse.js'],
  output: [
    {
      dir: `dist/cjs`,
      format: 'cjs',
    },
    {
      dir: `dist/esm`,
      format: 'esm',
    },
  ],
};
