// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     try{
//   app.use(
//     '/api-marketplace',
//     createProxyMiddleware({
//       target: 'https://beta.api.solanalysis.com/rest/get-market-place-snapshots',
//       changeOrigin: true,
//     })
//   );
// }
//   catch(err){
//     console.log(err.message);
//  }
// };