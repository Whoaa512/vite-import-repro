import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImportus from "vite-plugin-importus";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    vitePluginImportus([
      {
        libraryName: "antd",
        libraryDirectory: "es",
      },
    ]),
  ],
})
