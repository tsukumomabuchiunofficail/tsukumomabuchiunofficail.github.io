import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindConfig from './tailwind.config';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {},
  server: {
    watch: {
      usePolling: true,
    }
  },
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        navigateFallback: undefined,
      },
      includeAssets: ['logo.png'],
      manifest: {
        name: 'TsukumoMabuchi.Unofficail',
        short_name: 'tsukumomabuchi.unofficail',
        description: 'TsukumoMabuchi Unofficail WebSite',
        icons: [
          {
            src: 'logo.png',
            sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    },
  },
});
