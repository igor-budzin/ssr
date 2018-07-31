const path = require('path');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			},
			{ test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
			{ test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
			{ test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
			{ test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
			{     test: /\.(woff|woff2|eot|ttf|svg)$/,
   					loader: 'file?name=fonts/[name].[ext]' },
			{
			    test: /\.css$/,
			    use: ["style-loader", "css-loader", "autoprefixer-loader"]
			},
{
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader",
	        options: {
	            javascriptEnabled: true
            }
        }]
}
		]
	}
};