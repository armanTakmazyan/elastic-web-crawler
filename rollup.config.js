import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import packageConfig from './package.json';
import json from '@rollup/plugin-json';

const buildConfig = ({ format = 'cjs', browser = false } = {}) => {
  const year = new Date().getFullYear();
  const banner = `// elastic-web-crawler v${packageConfig.version} Copyright (c) ${year} ${packageConfig.author}`;

  return {
    input: './src/index.ts',
    output: [
      {
        dir: `./lib/${format}`,
        format: `${format}`,
        banner,
      },
    ],
    external: [...Object.keys(packageConfig.peerDependencies || {})],
    plugins: [
      nodeResolve({
        browser,
      }),
      commonjs(),
      json(),
      typescript(),
      terser(),
    ],
  };
};

export default async () => {
  return [buildConfig(), buildConfig({ format: 'esm', browser: 'true' })];
};
