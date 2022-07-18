import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://fersayago.github.io/REST-RickAndMorty/",
  plugins: [react()]
})
