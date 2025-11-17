module.exports = ({ env }) => ({
  upload: {
    enabled: true,
  },
  "website-builder": {
    enabled: false,
  },
  "preview-button": {
    enabled: true,
    resolve: "./src/plugins/preview-button",
  },
});
