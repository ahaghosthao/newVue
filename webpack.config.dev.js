const path = require('path');
const HtmlWebackPlugin = require('html-webpack-plugin')
module.exports =  {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map',
    resolve:{
      modules:[
          path.resolve(__dirname,''),
          path.resolve(__dirname,'node_modules')
      ]  
    },
    plugins:[
        new HtmlWebackPlugin()
    ],
    devServer:{
        port:2333
    }
    
}