import { VComponent } from "framework";

class AppHeader extends VComponent {
    constructor(config) {
        super(config);
    }

}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
        <div class="navbar-fixed">  
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">
                <span class="pl10">SPA</span>
              </a>
            </div>
          </nav>
        </div>
    `
});