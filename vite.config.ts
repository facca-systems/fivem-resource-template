/* eslint-disable import/no-extraneous-dependencies */
import path from 'node:path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator';

import { imageOptimizerPlugin } from './plugins/ImageOptmizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageOptimizerPlugin(),
    obfuscatorPlugin({
      options: {
        // your javascript-obfuscator options
        debugProtection: true,
        // ...  [See more options](https://github.com/javascript-obfuscator/javascript-obfuscator)
      },
    }),
  ],
  base: './',
  server: {
    open: true,
    host: '127.0.0.1',
    port: 1904,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src', 'app'),
      '@views': path.resolve(__dirname, 'src', 'views'),
    },
  },
});
