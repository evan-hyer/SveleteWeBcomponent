import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
			entry: 'src/lib/example-app-component/index.ts',
			formats: ['iife'],
			name: 'app',
			fileName: () => 'example-app-component.js' //I wanted to control the name of javascript, using arrow function i can accomplish that
	}
}
})
