module.exports = {
    pwa: {
      dest: 'public',
      disable: false,
      manifest: {
        name: '7Hills',
        short_name: '7Hills',
        start_url: 'https://7hills-jo.vercel.app/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'static/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'static/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  }
  