const isProd = (process.env.NODE_ENV || 'production') === 'production'
console.log("IS PROD", isProd);
module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  assetPrefix: isProd ? '' : '',
}