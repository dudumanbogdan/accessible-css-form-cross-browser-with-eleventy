module.exports = function (config) {
    config.addWatchTarget('./src/sass/');
    config.addPassthroughCopy('./src/css/');

    return {
        dir: {
            'input': 'src',
            'output': 'public'
        }
    }
}