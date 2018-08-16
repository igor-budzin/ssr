import http from 'http';
import express from 'express';
import colors from 'colors';

// Development Libraries
import webpack from 'webpack';
import devWebpackConfig from '../../webpack/webpack.config.dev';

import { renderPage, renderDevPage } from './ssr';

const PROD = process.env.NODE_ENV === 'production';

const app = express();

// Production settings
if (PROD) {

	app.use('/static', express.static('build'));

	app.get('*', renderPage);

// Development settings
} else if (!PROD) {
	const compiler = webpack(devWebpackConfig);

	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: devWebpackConfig.output.publicPath
	}));

	app.use(require('webpack-hot-middleware')(compiler, {
		log: console.log
	}));

	app.get('*', renderDevPage);
}
   
const server = http.createServer(app);

server.listen(3000, () => {
	console.log(`${'Server running on:'.yellow} ${'http://localhost:3000'.red}`);
});