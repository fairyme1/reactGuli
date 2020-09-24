module.exports = {
    mode: 'development',
  
    // // 默认src下的index.js是入口，约定大于配置
    plugins: [
       
    ],
    module: {//所有第三方模块的匹配规则
        rules: [//第三方匹配规则
            // exclude 一定要排除这个文件
            {
                test: /\.js|jsx$/, exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: { version: 3 },
                                targets: {
                                    "chrome": "58",
                                    "ie": "9",
                                }
                            }
                            ]
                        ],
                        cacheDirectory: true,//开启缓存
                    }
                }
            },//千万不能忘记添加 exclude排除项



            { test: /\.less$/, use: ['style-loader','css-loader','less-loader' ]}
            
        ]
    },
    // resolve: {
    //     extensions: ['.js','.jsx','.json'],
    //     alias: {
    //         '@': path.join(__dirname,'./src')
    //     }
    // } 

}