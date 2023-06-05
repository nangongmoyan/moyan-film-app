
import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers:[VantResolver()]
    })
  ],
  resolve:{
    alias:{// 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./src"), // path记得引入
    }
  }
})
