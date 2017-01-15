// module.exports = function(config) {
//     config.set({
//         basePath: '../',

//         frameworks: ['jasmine'],

//         files: [
//             'app/lib/angular/angular.min.js',
//             'app/lib/angular-*/angular-*.js',
//             'app/lib/iso-3166-country-codes-angular/iso-3166-country-codes-angular.js',
//             'app/css/bootstrap/css/bootstrap.css',
//             'app/css/app.css',
//             'app/js/**/*.js', // !!!! load .module files first and then everything else. Otherwise nothing will work
//             'app/js/weather.js',

//             // templates
//             'app/**/*.html',

//             // test files
//             'test/unit/**/*.spec.js'


//         ],

      
//         autoWatch: true,


//         browsers: ['Chrome'],

//         plugins: [
//             'karma-junit-reporter',
//             'karma-chrome-launcher',
//             'karma-jasmine'
//         ],

//         // junitReporter: {
//         //     outputFile: 'test_out/unit.xml',
//         //     suite: 'unit'
//         // }

//     })
// };


// // Karma configuration

// // module.exports = function(config) {
// //     config.set({

// //         // base path that will be used to resolve all patterns (eg. files, exclude)
// //         basePath: '../',

// //         // frameworks to use
// //         frameworks: ['jasmine'],

// //         // list of files / patterns to load in the browser
// //         files: [
// //             // bower:js
// //             'app/lib/angular/angular.min.js',
// //             'app/lib/angular-*/angular-*.js',
// //             'app/lib/iso-3166-country-codes-angular/iso-3166-country-codes-angular.js',
// //             'app/css/bootstrap/css/bootstrap.css',
// //             'app/css/app.css',

// //             // endbower

// //             //'test/mocks/**/*.js',

// //             'app/js/**/*.js', // !!!! load .module files first and then everything else. Otherwise nothing will work
// //             'app/js/*.js',

// //             // templates
// //             'app/**/*.html',

// //             // test files
// //             'test/unit/**/*.spec.js'


// //         ],

// //         // list of files to exclude
// //         exclude: [],

// //         plugins: [
// //             'karma-junit-reporter',
// //             'karma-chrome-launcher',
// //             'karma-jasmine'
// //         ],


// //         // web server port
// //         port: 0,

// //         // enable / disable colors in the output (reporters and logs)
// //         colors: true,

// //         // level of logging
// //         // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
// //         logLevel: config.LOG_INFO,

// //         // enable / disable watching file and executing tests whenever any file changes
// //         autoWatch: true,

// //         // start these browsers
// //         // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
// //         browsers: ['Chrome'],

// //         // Continuous Integration mode
// //         // if true, Karma captures browsers, runs the tests and exits
// //         singleRun: true
// //     });
// // };
