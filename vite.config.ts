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
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'JahUI',
      // 💡 Quitamos los formatos de aquí arriba para manejarlos abajo de forma estricta
    },
    rollupOptions: {
      external: ['vue', 'chart.js', 'vue-chartjs'],
      // 💡 Configuramos un array de outputs para darle reglas independientes a cada formato
      output: [
        {
          format: 'es',
          inlineDynamicImports: true, // 💥 Fuerza a meter TODO en el archivo ESM
          entryFileNames: 'jah-ui.es.js',
          preserveModules: false      // Evita explícitamente que preserve los archivos individuales
        },
        {
          format: 'umd',
          inlineDynamicImports: true, // 💥 Fuerza a meter TODO en el archivo UMD
          entryFileNames: 'jah-ui.umd.js',
          name: 'JahUI',
          globals: {
            vue: 'Vue',
            'chart.js': 'Chart',
            'vue-chartjs': 'VueChartjs'
          }
        }
      ]
    },
  },
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
})
