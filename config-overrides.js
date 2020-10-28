const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    // only import needed components according to imports (babel-plugin-import )
    fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    }),

    addLessLoader({
        lessOptions:{
            javascriptEnabled:true,
            modifyVars:{'@primary-color':'#1DA57A'},
        }
    }),
    );