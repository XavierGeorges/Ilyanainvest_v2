import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Robustly replace process.env.API_KEY with the actual string value during build
      // Using || '' ensures it doesn't become undefined in the code which can cause issues
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  }
})