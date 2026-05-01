import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178,
    host: true,
    cors: true
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    // Dividir código em chunks para carregamento mais rápido
    rollupOptions: {
      output: {
        manualChunks: {
          // Bibliotecas de terceiros em chunk separado (ficam em cache no navegador)
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
        // Nomes com hash para cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Alerta para chunks maiores que 500kb
    chunkSizeWarningLimit: 500,
    // Gera arquivo de análise de bundle
    sourcemap: false,
  },
})
