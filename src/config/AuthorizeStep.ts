import {Redirect, NavigationInstruction, RouterConfiguration, Router, Next} from 'aurelia-router';

export class AuthorizeStep {
    run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
        if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
            var isLoggedIn = false;

            if (!isLoggedIn) {
                return next.cancel(new Redirect('login'));
            }
        }

        return next();
    }
}
