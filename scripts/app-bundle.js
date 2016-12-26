define('config/routes',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        { route: 'branches',
            name: 'branches',
            moduleId: './pages/branches/index',
            nav: true,
            title: 'Branches',
            auth: true
        }, {
            route: ['', 'dashboard'],
            name: 'welcome',
            moduleId: './pages/dashboard/index',
            nav: true,
            title: 'Welcome',
            auth: true
        }, {
            route: 'audit',
            name: 'audit',
            moduleId: './pages/audit/index',
            nav: true,
            title: 'Audit',
            auth: true
        }, {
            route: 'login',
            name: 'login',
            moduleId: './pages/auth/login',
            nav: false,
            title: 'Login',
            auth: false
        }, {
            route: 'logout',
            name: 'logout',
            moduleId: './pages/auth/logout',
            nav: false,
            title: 'Logout',
            auth: false
        }
    ];
});

define('app',["require", "exports", "./config/routes", "./config/AuthorizeStep"], function (require, exports, routes_1, AuthorizeStep_1) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = 'Hello World!';
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.addPipelineStep('authorize', AuthorizeStep_1.AuthorizeStep);
            config.map(routes_1.default);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});

define('pages/auth/login',["require", "exports"], function (require, exports) {
    "use strict";
    var Login = (function () {
        function Login() {
        }
        return Login;
    }());
    exports.Login = Login;
});

define('pages/auth/logout',["require", "exports"], function (require, exports) {
    "use strict";
    var Logout = (function () {
        function Logout() {
        }
        return Logout;
    }());
    exports.Logout = Logout;
});

define('pages/dashboard/index',["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
        }
        return Index;
    }());
    exports.Index = Index;
});

define('pages/audit/index',["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
        }
        return Index;
    }());
    exports.Index = Index;
});

define('pages/branches/index',["require", "exports"], function (require, exports) {
    "use strict";
    var Index = (function () {
        function Index() {
        }
        return Index;
    }());
    exports.Index = Index;
});

define('pages/auth/AuthorizeStep',["require", "exports"], function (require, exports) {
    "use strict";
    var AuthorizeStep = (function () {
        function AuthorizeStep() {
        }
        return AuthorizeStep;
    }());
    exports.AuthorizeStep = AuthorizeStep;
});

define('pages/audit/AuthorizeStep',["require", "exports"], function (require, exports) {
    "use strict";
    var AuthorizeStep = (function () {
        function AuthorizeStep() {
        }
        return AuthorizeStep;
    }());
    exports.AuthorizeStep = AuthorizeStep;
});

define('config/AuthorizeStep',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    var AuthorizeStep = (function () {
        function AuthorizeStep() {
        }
        AuthorizeStep.prototype.run = function (navigationInstruction, next) {
            if (navigationInstruction.getAllInstructions().some(function (i) { return i.config.settings.auth; })) {
                var isLoggedIn = false;
                if (!isLoggedIn) {
                    return next.cancel(new aurelia_router_1.Redirect('login'));
                }
            }
            return next();
        };
        return AuthorizeStep;
    }());
    exports.AuthorizeStep = AuthorizeStep;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n    <div class=\"row\">\n      <router-view></router-view>\n    </div>\n  </div>\n  \n</template>\n"; });
define('text!pages/auth/login.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Login</h1>\r\n</template>"; });
define('text!pages/auth/logout.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Logout</h1>\r\n</template>"; });
define('text!pages/branches/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Branches</h1>\r\n</template>"; });
define('text!pages/dashboard/index.html', ['module'], function(module) { module.exports = "<template>\r\n    <h1>Dashboard</h1>\r\n</template>"; });
define('text!pages/audit/index.html', ['module'], function(module) { module.exports = "<template>\r\n    Audit\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map