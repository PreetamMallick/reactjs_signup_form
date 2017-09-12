var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2", "env"]
				}
			},
			{
				test: /\.css?/,
				loader: "style-loader!css-loader"
			},
			{
			    test: /\.(jpe?g|png|gif|svg)$/i,
			    use: [
			        'url-loader?limit=10000',
			        'img-loader'
			    ]
		    }
		]
	}
};

module.exports = config;