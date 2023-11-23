import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), UnoCss()],
})
