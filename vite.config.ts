import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import autoprefixer from 'autoprefixer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({}) // add options if needed
      ],
    }
  }
})
