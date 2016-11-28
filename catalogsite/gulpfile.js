//--------------------------------------------------------------
//references
//--------------------------------------------------------------
	var path = require('path');
	var del  = require('del');
	var gulp = require('gulp');
	var $    = require('gulp-load-plugins')();

//--------------------------------------------------------------
//setting environment
//--------------------------------------------------------------
	var environment   = $.util.env.type || 'development';
	var isProduction  = environment === 'production';
	var webpackConfig = require('./webpack.config.js').getConfig(environment);

//--------------------------------------------------------------
// Directories and port
//--------------------------------------------------------------
	var port = $.util.env.port || 8080;
	var app  = 'app/';
	var dist = 'dist/';

//--------------------------------------------------------------
// https://github.com/ai/autoprefixer
//--------------------------------------------------------------
	var autoprefixerBrowsers = [                 
		'ie >= 9',
		'ie_mob >= 10',
		'ff >= 30',
		'chrome >= 34',
		'safari >= 6',
		'opera >= 23',
		'ios >= 6',
		'android >= 4.4',
		'bb >= 10'
	];


//--------------------------------------------------------------
// Scripts
//--------------------------------------------------------------
	gulp.task('scripts', function(){
		return gulp.src(webpackConfig.entry)
			.pipe($.webpack(webpackConfig))
			.pipe(isProduction ? $.uglify() : $.util.noop())
			.pipe(gulp.dest(dist + 'js/'))
			.pipe($.size({ title : 'js' }))
			.pipe($.connect.reload());
	})

//--------------------------------------------------------------
// HTML
//--------------------------------------------------------------
	gulp.task('html', function(){
		return gulp.src(app + 'index.html')
			.pipe(gulp.dest(dist))
			.pipe($.size({ title: 'html' }))
			.pipe($.connect.reload());
	})

//--------------------------------------------------------------
// Styles
//--------------------------------------------------------------
	gulp.task('sass', function(){
		return gulp.src(app + 'styles/**/*.{scss,sass}')
			.pipe($.sass.sync().on('error', $.sass.logError))
			.pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
			.pipe(isProduction ? $.sass({outputStyle: 'compressed'}) : $.sass({outputStyle: 'expanded'})) 
			.pipe(gulp.dest(dist + 'styles/'))
			.pipe($.size({ title : 'css' }))
			.pipe($.connect.reload());
	})
//--------------------------------------------------------------
// Fonts
//--------------------------------------------------------------
	gulp.task('fonts', function(){
		return gulp.src(app + 'styles/fonts/**/*.{ttf,woff,woff2,eot,svg}')
			.pipe($.size({ tittle: 'fonts' }))
			.pipe(gulp.dest(dist + 'styles/fonts/'))
	});

//--------------------------------------------------------------
// Images
//--------------------------------------------------------------
	gulp.task('images', function(){
		return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif}')
			.pipe($.size({ title: 'images'}))
			.pipe(gulp.dest(dist + 'images/'))
	})

//--------------------------------------------------------------
// watch Live changes
//--------------------------------------------------------------
	gulp.task('watch', function(){
		gulp.watch(app + 'index.html',['html']);
		gulp.watch(app + 'styles/**/*.scss', ['sass']);
		gulp.watch(app + 'scripts/**/*.js', ['scripts']);
		gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
	})

//--------------------------------------------------------------
// clean
//--------------------------------------------------------------
	gulp.task('clean', function(cb){
		return del([dist], cb)
	})


//--------------------------------------------------------------
// Livereload serve on given port
//--------------------------------------------------------------
	gulp.task('server', function(){
		$.connect.server({
			host: '127.0.0.1',
			root: dist,
			port: port,
			livereload: {
				port: 35729
			}
		});
	})

//--------------------------------------------------------------
// Serve task
//--------------------------------------------------------------
	gulp.task('serve', ['images','html','scripts', 'sass', 'fonts','server','watch'])

//--------------------------------------------------------------
// Generate distribution
//--------------------------------------------------------------

	gulp.task('build', ['clean'], function(){
		gulp.start(['images','html','scripts', 'sass', 'fonts'])
	})

//--------------------------------------------------------------
// Default
//--------------------------------------------------------------
	gulp.task('default', ['build'])