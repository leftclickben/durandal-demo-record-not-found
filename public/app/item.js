(function () {
    define(
        [
            'knockout',
            'plugins/router'
        ],
        function (ko, router) {
            var database = {
                    xyzzy: {
                        name: 'Xyzzy',
                        description: '<p>You are in a maze of twisty little passages, all alike.</p>'
                    },
                    foo: {
                        name: 'Foo',
                        description: '<p>Fee Fie Foe Foo. Plugh.</p>'
                    }
                };

            return {
                name: ko.observable(),
                description: ko.observable(),
                activate: function (slug) {
                    // Do database lookup of `slug`
                    if (database[slug]) {
                        this.name(database[slug].name);
                        this.description(database[slug].description);
                    } else {
                        router.navigate('not-found?from=' + document.location.pathname + document.location.hash, { replace: true, trigger: true });
                    }
                }
            };
        }
    );
}());
