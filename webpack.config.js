var path = require( 'path' );

var assetsPath = path.join( __dirname, 'public', 'assets' );
var publicPath = 'assets/';
var commonLoaders = [
	{
		test: /\.js$|\.jsx$/,
		loader: 'babel-loader',
		include: path.join( __dirname,  'app' )
	},
	// {
	//   test: /\.json$/,
	//   loader: 'json-loader'
	// }
];

module.exports = [
	{
		name: 'browser',
		devtool: 'source-map',
		context: path.join( __dirname,  'app' ),

		entry: {
			app: './client'
		},

		output: {
			path: assetsPath,
			filename: '[name].js',
			publicPath: publicPath
		},
		module: {
			rules: commonLoaders
		},
		resolve: {
			extensions: [ '.js', '.jsx' ],
			modules: [
				path.join( __dirname, 'app' ),
				'node_modules'
			]
		}
	},
	{
		name: 'server-side rendering',
		context: path.join( __dirname, 'app' ),
		entry: {
			app: './server'
		},
		target: 'node',
		output: {
			path: assetsPath,
			filename: '[name].server.js',
			publicPath: publicPath,
			libraryTarget: 'commonjs2'
		},
		module: {
			rules: commonLoaders
		},
		resolve: {
			extensions: [ '.js', '.jsx' ],
			modules: [
				path.join( __dirname, 'app' ),
				'node_modules'
			]
		}
	}
];
