import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    environmentMatchGlobs: [
      ['tests/a11y/**', 'jsdom']
    ],
    setupFiles: [],
    include: ['tests/**/*.test.ts']
  }
})
