import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json', // Apunta a tu configuración de TS
      cleanVueFileName: true,          // Limpia los nombres de archivos temporales de Vue
      insertTypesEntry: true,          // Asegura la entrada de tipos correcta
      exclude: [
        'src/**/*.stories.ts',
        'src/**/*.stories.js',
        'src/**/*.test.ts'
      ]
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JahUI',
      fileName: 'jah-ui',
    },
    rollupOptions: {
      external: ['vue', 'chart.js', 'vue-chartjs'],
      output: {
        globals: { 
          vue: 'Vue',
          'chart.js': 'Chart',
          'vue-chartjs': 'VueChartjs'
        },
      },
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
})
