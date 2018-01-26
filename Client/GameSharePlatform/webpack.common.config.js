module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: '/dist/',
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader",
            include: /node_modules/
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader?modules",
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpe?g|gif)/,
            loader: "url-loader?limit=8192"
        }
        ]
    },

    plugins: [],
};