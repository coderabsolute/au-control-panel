import {inject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

import routes from './config/routes';
import {AuthorizeStep} from './config/AuthorizeStep';

export class App {
    public router: Router;
    message = 'Hello World!';

    configureRouter(config: RouterConfiguration, router: Router): void {
      
        this.router = router;
        config.title = 'Aurelia';
        config.addPipelineStep('authorize', AuthorizeStep);
        config.map(routes);

        this.router = router;
    }
}
