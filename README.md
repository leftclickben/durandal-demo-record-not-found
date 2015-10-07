This is a demo showing how to handle a situation using Durandal framework where a module's `activate()` method loads
a record from the database, and you want to display a "not found" page while retaining the original URL.

## Usage

Ensure `grunt-cli` and `bower` are both installed globally (`npm install -g grunt-cli`, `npm install -g bower`), then:

    npm install
    bower install
    grunt

Then visit http://localhost:8888/ in your web browser.

Note that this project doesn't support loading a non-root URL directly in the browser, due to the simplistic nature of
the web server setup.

Alternatively, use an external web browser such as nginx (the web root should be `public`) and then only the bower
components need to be installed (not grunt or any other local npm modules)

## Details

In this repo, the parameterised route `items/:slug` is mapped to the `item` module.  This module's `activate()`
simulates a database lookup based on the `slug` parameter.  If the database lookup is successful, then the relevant
data is displayed in the view via observables.  If the database lookup fails (because the `slug` does not match any
known records) then the router is used to navigate to the `not-found` module:

    router.navigate('not-found?from=' + document.location.pathname + document.location.hash, { replace: true, trigger: true });

Note that the database lookup here is synchronous instead of asynchronous as a real database lookup would be, but that 
does not affect the issue.

The options to `navigate()` here mean that no new entry is added to the history (`replace: true`) and that the new
module is actually activated and displayed (`trigger: true`, which is redundant as it is the default).

The `not-found` module also has an `activate()` function, which looks for the presence of the `from` parameter, and
again uses the router to navigate, with different options:

    router.navigate(params.from, { replace: true, trigger: false });

The options to `navigate` here are again to reuse the last entry in the history (`replace: true`) and this time, to
only change the URL in the address bar but not actually render the new view.

This means that finally, the `not-found` view is visible, but with the original URL.

## Drawbacks

The major drawback is that the address bar momentarily shows a different URL, i.e. it goes from the original URL to
the "not-found" URL and back to the original URL without user intervention.  However, due to the fact that `replace`
is always `true`, the back button still works as expected.

## References

* Related StackOverflow issue: http://stackoverflow.com/questions/31703448/how-to-display-a-not-found-page-with-parameterised-route-in-durandal
* Documentation: http://durandaljs.com/documentation/Using-The-Router.html (See "Triggering Navigation" section)
* Source code: 
  * https://github.com/BlueSpire/Durandal/blob/2.1.0/src/plugins/js/history.js#L27
  * https://github.com/BlueSpire/Durandal/blob/2.1.0/src/plugins/js/history.js#L224
  * https://github.com/BlueSpire/Durandal/blob/2.1.0/src/plugins/js/router.js#L696
