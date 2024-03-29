import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
  assetsInclude: ['src/assets/images/**'],
  base: 'https://rodrigo92hw.github.io/porfolio/',
})
