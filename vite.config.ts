import { defineConfig } from 'vite'

import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'generateSW', // 'generateSW' | 'injectManifest'
      injectRegister: 'inline', // change to auto if fails
      manifest: {
        "theme_color": "#D986C1",
        "background_color": "#1C192E",
        "display": "standalone",
        "scope": "/",
        "start_url": "https://pwa-portfolio.vercel.app/",
        "name": "SofiaGonzaloC",
        "short_name": "SGC",
        "description": "Sofia's portfolio",
        "icons": [
          {
            "src": "images/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "images/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "images/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "images/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      workbox: {

      },
    })
  ]
})
