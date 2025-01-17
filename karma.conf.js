// Karma configuration
// Generated on Thu Sep 05 2013 14:14:49 GMT-0400 (EDT)

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config) {
	config.set({

		// base path, that will be used to resolve files and exclude
		basePath: "./",


		// frameworks to use
		frameworks: ["qunit"],


		// list of files / patterns to load in the browser
		files: [
			"node_modules/d3/dist/d3.min.js",
			"src/cal-heatmap.js",
			"node_modules/jquery/dist/jquery.min.js",
			"test/test.js",
			{
				pattern: "test/data/data.*",
				included: false
			}
		],


		// list of files to exclude
		exclude: [

		],


		// test results reporter to use
		// possible values: "dots", "progress", "junit", "growl", "coverage"
		reporters: ["progress", "coverage"],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		preprocessors: {
			// source files, that you wanna generate coverage for
			// do not include tests or libraries
			// (these files will be instrumented by Istanbul)
			"src/*.js": ["coverage"]
		},

		coverageReporter: {
			type: "lcov",
			dir: "coverage/"
		},

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ["ChromeHeadless"],


		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 5000,


		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false
	});
};
