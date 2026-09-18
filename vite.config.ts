import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Export base path for GitHub Pages
// Change this if your repository name is different
const repoName = 'manikanth-digital-studio'

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? `/${repoName}/` : '/',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})