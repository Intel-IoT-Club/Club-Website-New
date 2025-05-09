import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    postcss()
  ],
  server: {
    port: 3000,
    // Ensure React Router handles routes properly in development
    historyApiFallback: true
  }
})
