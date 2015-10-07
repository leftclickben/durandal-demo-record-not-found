(function () {
    'use strict';

    // Initialise module loader
    require.config({
        urlArgs: 'm=' + (new Date()).getTime(),
        baseUrl: '/app/',
        paths: {
            // Vendor libraries
            knockout: '../lib/knockout.js/knockout.debug',
            jquery: '../lib/jquery/jquery',
            durandal: '../lib/durandal/js/',
            plugins: '../lib/durandal/js/plugins/',
            transitions: '../lib/durandal/js/transitions/',
            text: '../lib/requirejs-text/text',

            // Application
            app: './'
        }
    });

    require(
        [
            'durandal/system',
            'durandal/app'
        ],
        function (system, app) {
            system.debug(true);
            app.title = 'Durandal Test';
            app.configurePlugins({
                router: true,
                widget: true
            });
            app.start().then(function () {
                app.setRoot('shell');
            });
        }
    );
}());
