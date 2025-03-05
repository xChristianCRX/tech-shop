import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shadcn/ui": path.resolve(__dirname, "node_modules/@shadcn/ui"), // Adiciona o alias para o shadcn/ui
    },
  },
})
