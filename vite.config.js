import { defineConfig } from "vite";

export default defineConfig({
    base: '/TodoApp/',
    build: { 
        outDir: './docs',
        emptyOutDir: true,
    }
})