// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ModuleFederationPlugin } = require('webpack').container

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

module.exports = {
  mode: 'development',
  devServer: {
    port: 3001
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'mfcontainer',
        remotes: {
          app1: 'app1@http://localhost:3002/remoteEntry.js'
        },
        shared: packageJson.dependencies
      })
    ],
    configure: {
      output: {
        // We have to configure the output dir for routing issues
        // finalizing slash is important!
        publicPath: 'http://localhost:3001/'
      }
    }
  }
}
