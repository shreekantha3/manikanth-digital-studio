import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// GitHub Pages base path — set REPO_NAME in your build environment
// or change this constant to match your repository name.
const REPO_NAME = process.env.VITE_REPO_NAME ?? 'manikanth-digital-studio'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // For GitHub Pages at https://<user>.github.io/<repo>/
  base: process.env.VITE_BASE ?? `/${REPO_NAME}/`,
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
