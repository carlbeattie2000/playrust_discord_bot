import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'config_ui/',
    build: {
        rollupOptions: {
            output: {
                dir: join(process.cwd(), '../../', 'public/config_ui'),
            }
        }
    },
})
