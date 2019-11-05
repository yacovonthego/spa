import { VComponent, http, _ } from "framework";

class HomePageComponent extends VComponent {
    constructor(config) {
        super(config);

        this.state = {
            api: 'https://api.unsplash.com',
            access: '?client_id=5460563e61c411ffb1d1dc5566d5a6c5449cb6d08f8804ddf5e18df08c661e2d',
            title: 'Главная страница',
            ip: 'Loading...',
            collections: []
        }
    }

    onInit() {
        // console.log('component init')
        // console.log(this.el)
    }

    afterInit() {
        _.delay(2000).then(() => http.get(`${this.state.api}/collections${this.state.access}`)
            .then(res => {
                this.state.collections = res;
                this.render();
                removePreloader('.blue-preloader');

                // console.log(this)
            }))
    }

    events() {
        return {
            'click .home': 'onHomePageClick',
            'DOMContentLoaded .home': 'handleLoad'
        }
    }

    handleLoad() {}


    onHomePageClick(event) {
        console.log(event);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        <div class="home">
            <div class="row">
              <div class="preloader-wrapper big active blue-preloader">
                <div class="spinner-layer spinner-blue-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div><div class="gap-patch">
                    <div class="circle"></div>
                  </div><div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    `
})

function removePreloader(selector) {
    document.querySelector(selector).remove();
}