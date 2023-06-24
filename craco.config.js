// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ModuleFederationPlugin } = require('webpack').container

// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies

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
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps['react']
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom']
          }
        }
      })
    ]
  }
}
