import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const asyncCssPlugin = {
    name: 'async-css',
    transformIndexHtml(html) {
        return html.replace(
            /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
            (_, href) =>
                `<link rel="preload" as="style" href="${href}" onload="this.rel='stylesheet'">` +
                `<noscript><link rel="stylesheet" href="${href}"></noscript>`,
        );
    },
};

export default defineConfig({
    plugins: [react(), imagetools(), asyncCssPlugin],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    build: {
        minify: 'esbuild', // Включаем минификацию для продакшн-сборки
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    motion: ['framer-motion'],
                    i18n: ['i18next', 'react-i18next'],
                },
            },
        },
    },
    base: '/', // Для Vercel
});
