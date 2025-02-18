import path from 'path';
import { defineConfig } from 'vite';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import dts from 'vite-plugin-dts';
// import pkg from './package.json';

// const banner = `${pkg.name} v${pkg.version}\n(c) 2019 Smohan<https://smohan.net>.\nReleased under the MIT License.\nhttps://smohan.net/blog/d5uvpu`;

const pathResolve = dir => {
  return path.resolve(__dirname, '.', dir);
};

export default defineConfig({
  resolve: {
    alias: {
      '@icons': pathResolve('assets/icons'),
      '@plugin': pathResolve('plugin'),
    },
  },
  plugins: [getBabelOutputPlugin({ allowAllFormats: true, presets: [['@babel/preset-env']] }), dts()],
  server: {
    port: 8081,
  },
  build: {
    assetsDir: './',
    lib: {
      entry: pathResolve('./src/index.ts'),
      name: 'MoColorPicker',
      fileName: format => `mo.color-picker.${format}.js`,
    },
    minify: 'terser',
    rollupOptions: {
      output: {
        // banner,
        assetFileNames: 'mo.color-picker.css',
      },
    },
  },
});
