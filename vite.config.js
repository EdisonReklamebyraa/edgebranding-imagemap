import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: 'src/resources/js/image-map.js',
            name: 'ImageMap',
            formats: ['iife'],
        },
        outDir: 'dist/js',
        rollupOptions: {
            external: ['vue'],
            output: {
                entryFileNames: 'image-map.js',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
