// modulo nativo de node.js que nos gestiona las direcciones de las carpetas 
const path = require('path');

module.exports = {
     entry: './index.js',
//      __dirname nos devuleve la ruta -> representa nuestra ruta donde esta ubicada nuestra carpeta
     output: {
               path: path.resolve(__dirname),
               filename: './02-output.js',
             },
//      module: {
//          rules: [
//              {
//                  test: require.resolve("some-module"),
//                  use: "imports-loader?this=>window"
//              }
//          ]
//      }
                };