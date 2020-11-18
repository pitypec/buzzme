// module.exports = {
//     module: {
//       rules: [
//         {
//           test: /\.(png|jpg|gif)$/i,
//           use: [
//             {
//               loader: 'url-loader',
//               options: {
//                 limit: 8192,
//               },
//             },
//           ],
//         },
//       ],
//     },
//   };

// module.exports = {

//     module: {
//       loaders: [{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }];
//     }
// }

module.exports = {
  module: {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          esModule: false
        }
      }
    ]
  }
};
