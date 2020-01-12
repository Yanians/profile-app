const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode:"development",
	entry: {
     app: './environment/component.js'
},
	output: {
	path:path.resolve(__dirname,'build'),
	filename: 'main.bundle.js'
},
watch:true,
module: {
    rules:[{
        test: /\.js$/,
        use:{
        loader: 'babel-loader',
        options: { 
        	presets:['@babel/preset-env','@babel/react'],
        	rootMode:"upward",
                    configFile:path.resolve(__dirname,'./webpack.config.js')
         }
      },
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./public/image/adlawan.jpg"
            }
          }
        ],
      
       include: [
                     path.resolve('./node_modules/babel-loader'),
                     path.resolve('./public/js/jquery-3.1.1.js'),
                     path.resolve('./public/js/edu.js'),
                     path.resolve('./public/js/materiliaze.js'),
                     path.resolve('./public/js/materiliaze.min.js'),
                     path.resolve('./node_modules/@babel/babel-runtime'),
                     path.resolve('./node_modules/babel-plugin-proposal-export-default-from'),
                     path.resolve('./node_modules/@babel/babel-runtime/core-js'),
                     path.resolve('./node_modules/@babel/babel-preset-env'),
                     path.resolve('./node_modules/babel-plugin-proposal-private-methods'),
                     path.resolve('./node_modules/babel-plugin-proposal-class-properties'),
                     path.resolve('./node_modules/babel-plugin-proposal-export-default-from'),
                     path.resolve('./node_modules/babel-plugin-transform-es2015-classes'),
                     path.resolve('./node_modules/babel-plugin-transform-remove-strict-mode'),
                     path.resolve('./node_modules/babel-plugin-proposal-object-rest-spread'),
                     path.resolve('./node_modules/babel-plugin-transform-es2015-arrow-functions'),
                     path.resolve('./node_modules/babel-plugin-proposal-optional-catch-binding'),
                     path.resolve('./node_modules/babel-plugin-transform-es2015-literals'),
                     path.resolve('./node_modules/babel-plugin-transform-es2015-object-super'),
                     path.resolve('./node_modules/babel-plugin-transform-es2015-parameters'),
                     path.resolve('./node_modules/@babel/parser'),
                     path.resolve('./node_modules/babel-traverse'),
                     path.resolve('./node_modules/babylon'),
                     path.resolve('./node_modules/@babel/cli'),
                     path.resolve('./node_modules/watchpack'),
                     path.resolve('./node_modules/consolidate'),
                     path.resolve('./node_modules/express'),
                     path.resolve('./node_modules/import-local'),
                     path.resolve('./node_modules/webpack'),
                     path.resolve('./node_modules/webpack-cli'),
                     path.resolve('./node_modules/webpack-dev-server'),
                     path.resolve('./node_modules/html-webpack-plugin/lib/compiler.js'),
                     path.resolve('./node_modules/@babel/core'),
                     path.resolve('./node_modules/@babel/core/lib/functional.js'),
                     path.resolve('./contentCode')
  ],
  exclude: [
  	  path.resolve(__dirname,'./node_modules')
  ],
     } 
	]
},
	stats: {
       colors:true	
	},
	devtool: 'source-map'
};



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
// module.exports = {

//     devServer:{
//         stats: 'errors-only',
//         host:process.env.HOST,
//         port:process.env.PORT,
//         open:true,
//         overlay:true
//     },
//     plugins: [new ErrorOverlayPlugin()],
//     entry:{
//         app:'./environment/component.js'
//     },
//     output:{
//         path:path.resolve(__dirname,'build'),
//         filename:'app.bundle.js'
//     },
//     watch: true,
//     module:{
//         rules:[{
//             test: /\.js?$/, 
//             use:{
//                 loader:'babel-loader',
//                 options:{
//                     presets:['@babel/preset-env','@babel/react'],
//                     rootMode:"upward",
//                     configFile:path.resolve(__dirname,'../webpack.config.js')
//                 }
//             },
//             include:[
//                      "core-js/modules/es6.promise",
//                      "core-js/modules/es6.array.iterator",
//                      path.resolve('../node_modules/babel-loader'),
//                      path.resolve('../node_modules/babel-traverse'),
//                      path.resolve('../node_modules/babel-runtime'),
//                      path.resolve('../node_modules/babel-core'),
//                      path.resolve('../node_modules/@babel/babel-runtime'),
//                      path.resolve('../node_modules/@babel/parser'),
//                      path.resolve('../node_modules/@babel/babel-runtime/core-js'),
//                      path.resolve('../node_modules/@babel/babel-preset-env'),
//                      path.resolve('../node_modules/babel-plugin-proposal-private-methods'),
//                      path.resolve('../node_modules/babel-plugin-proposal-class-properties'),
//                      path.resolve('../node_modules/babel-plugin-proposal-export-default-from'),
//                      path.resolve('../node_modules/babel-plugin-transform-es2015-classes'),
//                      path.resolve('../node_modules/babel-plugin-transform-remove-strict-mode'),
//                      path.resolve('../node_modules/babel-plugin-proposal-object-rest-spread'),
//                      path.resolve('../node_modules/babel-plugin-transform-es2015-arrow-functions'),
//                      path.resolve('../node_modules/babel-plugin-proposal-optional-catch-binding'),
//                      path.resolve('../node_modules/babel-plugin-transform-es2015-literals'),
//                      path.resolve('../node_modules/babel-plugin-transform-es2015-object-super'),
//                      path.resolve('../node_modules/babel-plugin-transform-es2015-parameters'),
//                      path.resolve('../node_modules/babylon'),
//                      path.resolve('../node_modules/@babel/cli'),
//                      path.resolve('../node_modules/watchpack'),
//                      path.resolve('../node_modules/consolidate'),
//                      path.resolve('../node_modules/express'),
//                      path.resolve('../node_modules/import-local'),
//                      path.resolve('../node_modules/webpack'),
//                      path.resolve('../node_modules/webpack-cli'),
//                      path.resolve('../node_modules/webpack-dev-server'),
//                      path.resolve('../node_modules/html-webpack-plugin/lib/compiler.js'),
//                      path.resolve('../node_modules/@babel/core'),
//                      path.resolve('../node_modules/@babel/core/lib/functional.js'),
//                      path.resolve('../contentCode')
//                     ],

//             exclude:[
//                      path.resolve(__dirname,'../node_modules')
//                     ],         
//            }]
//        },
//        plugins: [
//     new HtmlWebpackPlugin({template: './src/index.html'})
//   ]
  
//   };
  
  // require("@babel/core").transform("code", {
//   plugins: ["@babel/plugin-syntax-dynamic-import"],
// });

// // const config = {
// //   entry: [
// //     "core-js/modules/es6.promise",
// //     "core-js/modules/es6.array.iterator",
// //     path.resolve(__dirname, "./contentCode/component.js"),
// //   ],
// //   // ...
// // };

// require("@babel/core").transform("code", {
//   plugins: ["@babel/plugin-proposal-export-default-from"]
// });

// require("babel-core").transform("code", {
//   plugins: ["transform-es2015-classes"]
// });

// // require("babel-core").transform("code", {
// //   plugins: ["transform-class-constructor-call"]
// // });

// require("babel-core").transform("code", {
//   plugins: ["transform-remove-strict-mode"]
// });

// require("@babel/core").transform("code", {
//   plugins: ["@babel/plugin-syntax-class-properties"]
// });

// require("@babel/core").transform("code", {
//   presets: ["@babel/preset-react"],
// });

// const productionConfig = merge([

//   parts.generateSourceMaps({ type: "source-map" }),

// ]);
