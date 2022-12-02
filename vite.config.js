import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv-vault-core'

dotenv.config();
console.log(process.env)

export default defineConfig({
  plugins: [vue()],
})
