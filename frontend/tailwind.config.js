const production = !process.env.ROLLUP_WATCH; // Or some other env var like NODE_ENV
module.exports = {
  future: { // For Tailwind 2.0 upcoming changes
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.svelte",
      "./public/**/*.html"
    ], 
    enabled: production // Disable purge in dev
  },
  theme: {
    extend: {
        colors: {
            'onyx': '#37393A',
            'alice-blue': '#E8EEF2',
            'pale-silver': '#D6C9C9',
            'beau-blue': '#C7D3DD',
            'aero': '#77B6EA'
        }
    }
  },
};