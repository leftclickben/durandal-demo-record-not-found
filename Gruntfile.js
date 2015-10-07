/*jshint node: true*/

(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            connect: {
                dev: {
                    options: {
                        port: 8888,
                        base: 'public',
                        keepalive: true
                    }
                }
            }
        });
        grunt.loadNpmTasks('grunt-contrib-connect');
        grunt.registerTask('default', [ 'connect:dev' ]);
    };
}());
