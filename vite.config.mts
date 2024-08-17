import { defineConfig, UserConfig } from "vite";
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [eslint({ cache: false }), react()],
  base: "./",
  root: "./",
  resolve: {
    alias: [
      { find: 'entities', replacement: fileURLToPath(new URL('./src/entities', import.meta.url)) },
      { find: 'pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: 'shared', replacement: fileURLToPath(new URL('./src/shared', import.meta.url)) },
    ]
  }
} satisfies UserConfig);
