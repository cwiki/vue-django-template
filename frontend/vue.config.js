const path = require('path')

const STATIC_URL = 'my-static-url-location-or-cdn/'

module.exports = {
    // changes the file routes to the static location required
    publicPath: STATIC_URL,
    chainWebpack: config => {
        // Configured so the html files are re-written and placed into the django template dir
        config.plugin('html').tap((opts) => {
            opts[0].filename = path.join(__dirname, '../templates/frontend.html')
            return opts;
        })
    }
}