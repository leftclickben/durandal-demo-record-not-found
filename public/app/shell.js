(function () {
    'use strict';

    define(
        [
            'plugins/router'
        ],
        function (router) {
            return {
                router: router,
                activate: function () {
                    return router
                        .map([
                            {
                                route: '',
                                moduleId: 'app/home',
                                title: 'Home'
                            },
                            {
                                route: 'items',
                                moduleId: 'app/items',
                                title: 'Item List'
                            },
                            {
                                route: 'items/:slug',
                                moduleId: 'app/item',
                                title: 'Item Detail'
                            }
                        ])
                        .mapUnknownRoutes('app/not-found')
                        .activate({ pushState: true });
                }
            };
        }
    );
}());
