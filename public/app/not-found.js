(function () {
    define([ 'plugins/router' ], function (router) {
        return {
            activate: function (url, params) {
                if (params.from) {
                    router.navigate(params.from, { replace: true, trigger: false });
                }
            }
        };
    })
}());
