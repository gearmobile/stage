'use strict';

/**
 * Watcher for images in assets dir of modules
 */
module.exports = () => {
    return tars.packages.chokidar.watch(
        'markup/modules/**/assets/*.*',
        Object.assign(tars.options.watch, {
            ignored: 'markup/modules/**/assets/*.tmp'
        })
    ).on('all', (event, watchedPath) => {
        tars.helpers.watcherLog(event, watchedPath);
        tars.packages.gulp.start('other:move-assets');
    });
};
