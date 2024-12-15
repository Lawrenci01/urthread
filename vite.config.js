import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // To prevent CORS issues during development
    proxy: {
      "/api": {
        target: "http://localhost:3006",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Specify the output directory for the build
    outDir: 'dist', // This ensures the build is output to 'dist', which is expected by Vercel
  },
});
