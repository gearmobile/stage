import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import rupture from 'rupture';
import stylint from 'gulp-stylint';
import stylus from 'gulp-stylus';

import poststylus from 'poststylus';
import autoprefixer from 'autoprefixer';
import lost from 'lost';
import nib from 'nib';

import gcmq from 'gulp-group-css-media-queries';
import nano from 'gulp-cssnano';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import errorHandler from 'gulp-plumber-error-handler';

gulp.task('styles', () => (
	gulp.src('app/styles/*.styl')
		.pipe(plumber({errorHandler: errorHandler('Error in \'styles\' task')}))
		.pipe(gulpif(gutil.env.debug, sourcemaps.init()))
		.pipe(stylus({
			use: [ poststylus(['lost', 'autoprefixer']), rupture(), nib() ],
			'include css': true
		}))
		.pipe(gulpif(!gutil.env.debug, gcmq()))
		.pipe(gulpif(!gutil.env.debug, nano()))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulpif(gutil.env.debug, sourcemaps.write()))
		.pipe(gulp.dest('dist/assets/styles'))
));

gulp.task('styles:lint', () => (
	gulp.src(['app/**/*.styl', '!app/styles/**'])
		.pipe(stylint({
			reporter: {
				reporter: 'stylint-stylish',
				reporterOptions: {verbose: true}
			}
		}))
		.pipe(stylint.reporter())
));
