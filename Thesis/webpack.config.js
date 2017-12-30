module.exports = {
	devtool: 'inline-source-map',
	entry: ['./client/client.js'], 
	output: {
		path: __dirname+ '/public', 
		filename: 'bundle.js',
		publicPath: '/'
	}, 
	devServer: {
    inline: false,
    contentBase: "./public",
  },
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
				query: {
					presets: ['react', 'es2015']
				}
			},
      { 
      	test: /\.css$/, 
      	loader: "style-loader!css-loader" 
      },
      {
      	test: /\.(gif|png|jpe?g|svg|webp)$/i,
      	loader: 'image-webpack-loader'
      },
      {
  			test: /\.(png|jpg)$/,
  			loader: 'url-loader'
			}
		]
	}
}
