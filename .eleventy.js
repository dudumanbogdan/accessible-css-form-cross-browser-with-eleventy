module.exports = function (config) {
    config.addWatchTarget('./src/sass/');
    config.addPassthroughCopy('./src/css/');
    config.addFilter('randomPost', (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });

        return arr.slice(0, 1);
    });

    return {
        dir: {
            'input': 'src',
            'output': 'public'
        }
    }
}