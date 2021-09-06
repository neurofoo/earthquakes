import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin";
import webpack, {Configuration} from "webpack";
// in case you run into any typescript error when configuring `devServer`
import "webpack-dev-server";

const webpackConfig = (env): Configuration => ({
    // FIXME: doesn't seem to like this config option
    //@ts-expect-error
    devServer: {
        historyApiFallback: true
    },

    entry: "./src/index.tsx",

    // Only include source maps in development
    ...(env.production || !env.development ? {} : {devtool: "eval-source-map"}),

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        //TODO waiting on https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/61
        //@ts-ignore
        plugins: [new TsconfigPathsPlugin()]
    },

    output: {
        path: path.join(__dirname, "/dist"),
        filename: "build.js"
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                },
                exclude: /dist/
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.PRODUCTION": env.production || !env.development,
            "process.env.NAME": JSON.stringify(require("./package.json").name),
            "process.env.VERSION": JSON.stringify(require("./package.json").version)
        }),
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
            }
        })
    ]
});

export default webpackConfig;
