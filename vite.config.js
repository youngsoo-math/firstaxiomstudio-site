import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    // Set the base path to relative so it works on GitHub Pages sub-paths
    base: './',
    build: {
        outDir: 'dist',
    },
})
