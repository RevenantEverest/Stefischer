import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@@assets': path.resolve(__dirname, './src/assets'),
            '@@components': path.resolve(__dirname, './src/components'),
            '@@containers': path.resolve(__dirname, './src/containers'),
            '@@navigation': path.resolve(__dirname, './src/navigation'),
            '@@pages': path.resolve(__dirname, './src/pages'),
            '@@store': path.resolve(__dirname, './src/store'),
            '@@types': path.resolve(__dirname, './src/types'),
            '@@theme': path.resolve(__dirname, './src/theme'),
            '@@constants': path.resolve(__dirname, './src/constants'),
            '@@utils': path.resolve(__dirname, './src/utils'),
        }
    },
    plugins: [react()],
});
