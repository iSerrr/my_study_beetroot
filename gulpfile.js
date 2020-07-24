//! Declare Gulp constants 
const gulp = require('gulp')
const fileinclude = require('gulp-file-include')
const sass = require('gulp-sass')
const watch = require('gulp-watch')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')
const image = require('gulp-image')
const webp = require('gulp-webp');
const inject = require('gulp-inject')
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const fs = require('fs');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');

gulp.task('hello',  () => {
	console.log('Hello')
})

//! Declare Custom constants 
const sourceFolder = './assets/development/'
const destFolder = './assets/'
const rootFolder = './'

//! Declare path obj
const path = {
	src: {
		scss: sourceFolder + 'styles/main.scss',
		html: sourceFolder + 'pages/index.html',
		img: sourceFolder + 'images/**/*.*',
		js: sourceFolder + 'scripts/**/*.js',
		fonts: sourceFolder + 'fonts/**/*.ttf'
	},
	watch: {
		scss: sourceFolder + 'styles/**/*.scss',
		html: sourceFolder + 'pages/*.html',
		img: sourceFolder + 'images/**/*.*',
		js: sourceFolder + 'scripts/**/*.js',
		fonts: sourceFolder + 'fonts/**/*.ttf'
	},
	dest: {
		img: destFolder + 'images/',
		js: destFolder + 'scripts/',
		fonts: destFolder + 'fonts/',
	},
}

//! Function compile SCSS => CSS file with autoprefixer
const scss = () => {
	return gulp
		.src(path.src.scss)
		.pipe(sass())
		.pipe(
			autoprefixer({
				browsers: ['last 4 versions'],
				cascade: false,
				grid: 'no-autoplace',
			})
		)

		.pipe(gulp.dest(rootFolder))
		.pipe(browserSync.stream())
}

//! Function minimize JS and use Babel
const minJs =  () => {
	return gulp.src(path.src.js)
		.pipe(babel({
			presets: ['@babel/env']
		}))
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.dest.js));
};

//! Convert fonts TTF => woff
const converTTF2woff =  () => {
	return gulp.src(path.src.fonts)
	  .pipe(ttf2woff())
	  .pipe(gulp.dest(path.dest.fonts));
};

//! Convert fonts TTF => woff2
const converTTF2woff2 =  () => {
	return gulp.src(path.src.fonts)
	  .pipe(ttf2woff2())
	  .pipe(gulp.dest(path.dest.fonts));
};

//! Autocomplete _typography.scss
const typographyBuild = () => {
	let file_content = fs.readFileSync(sourceFolder + 'styles/base/_typography.scss')
	fs.writeFile(sourceFolder + 'styles/base/_typography.scss', '', cb)
	return fs.readdir(path.dest.fonts, function (err, items) {
		if (items) {
			let c_fontname
			for (var i = 0; i < items.length; i++) {
				let fontname = items[i].split('.')
				fontname = fontname[0]
				if (c_fontname != fontname) {
					fs.appendFile(
						sourceFolder + 'styles/base/_typography.scss',
						'@include font("' + fontname + '", "' + fontname + '");\r\n',
						cb
					)
				}
				c_fontname = fontname
			}
		}
	})
}
const cb = () => {}

//! Build index.html file with include and add all JS.min files
const htmlBild = () => {
	let sources = gulp.src([`${path.dest.js}**/*.js`], {read: false});

	return gulp
		.src([path.src.html])
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(inject(sources))
		.pipe(gulp.dest(rootFolder))
}

//! Optimization all image and convert => WEBP
const images = () => {
	return gulp.src(path.src.img)
		.pipe(image())
		.pipe(webp())
		.pipe(gulp.dest(path.dest.img))
}

//! GULP
const serve = () => {
	browserSync.init({
		server: rootFolder,
	})
	gulp.watch(path.src.fonts, gulp.series(converTTF2woff, converTTF2woff2, typographyBuild))
	gulp.watch(path.watch.scss, gulp.series(scss))
	gulp.watch(path.watch.html, gulp.series(htmlBild))
	gulp.watch(path.watch.img, gulp.series(images))
	gulp.watch(path.watch.js, gulp.series(minJs, htmlBild))
	gulp.watch('./index.html').on('change', browserSync.reload)
}

gulp.task('serve', gulp.series(serve))