import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    plugins: [react(), imagetools()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
        },
    },
    build: {
        // Мініфікація — вбудованим oxc у Vite 8; esbuild більше не входить у Vite.
        rollupOptions: {
            output: {
                // Функцією, а не об'єктом: так розуміють і Rollup (Vite 6),
                // і Rolldown (Vite 8), який об'єктну форму не приймає.
                manualChunks(id) {
                    if (!id.includes('node_modules')) return undefined;
                    if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'react';
                    if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'motion';
                    if (id.includes('i18next')) return 'i18n';
                    return undefined;
                },
            },
        },
    },
    base: '/', // Для Vercel
});
