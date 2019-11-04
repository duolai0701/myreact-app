 const {
     override,
     fixBabelImports,
     addLessLoader,
     addDecoratorsLegacy
 } = require('customize-cra');


 module.exports = override(
     fixBabelImports('import', {
         libraryName: 'antd',
         libraryDirectory: 'es',
         style: true,
     }),
     addLessLoader({
         javascriptEnabled: true,
         modifyVars: {
             '@primary-color': '#1DA57A'
         },
     }),
     //设置装饰器,babel的方式,es7转js
     addDecoratorsLegacy()
 );