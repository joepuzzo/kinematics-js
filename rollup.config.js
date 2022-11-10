export default {
  input: [
    `lib/index.js`,
    'lib/forward.js',
    'lib/inverse.js',
    'lib/denavitHartenberg.js',
    'lib/toRadians.js',
    'lib/math.js',
    'lib/round.js',
    'lib/matrixDot.js',
    'lib/matrixSubset.js',
    'lib/inverse1_3.js',
    'lib/debug.js',
    'lib/roundMatrix.js',
    'lib/euler.js',
  ],
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
