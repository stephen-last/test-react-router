
import { resolve } from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  root: resolve(__dirname, 'src'),
  plugins: [
    reactRefresh()
  ],
  build: {
    outDir: resolve(__dirname, 'dist')
  }
}
