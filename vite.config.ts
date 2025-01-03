import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
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

            /* Index specific aliases */
            '@@constants': path.resolve(__dirname, './src/constants'),
            '@@hooks': path.resolve(__dirname, './src/hooks'),
            '@@theme': path.resolve(__dirname, './src/theme'),
            '@@services': path.resolve(__dirname, './src/services'),
            '@@utils': path.resolve(__dirname, './src/utils'),
        }
    },
    plugins: [react(), tailwindcss()],
});
