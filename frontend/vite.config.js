import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // While coding, send every /api request to Spring Boot on port 8080.
    // The browser then sees one address, so no extra CORS setup is needed.
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
