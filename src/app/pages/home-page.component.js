import { VComponent, http, _, $ } from "framework";
import { AppCollection } from "../common/app.collection";

class HomePageComponent extends VComponent {
    constructor(config) {
        super(config);

        this.state = {
            api: 'https://api.unsplash.com',
            access: 'client_id=5460563e61c411ffb1d1dc5566d5a6c5449cb6d08f8804ddf5e18df08c661e2d',
            collections: [],
            collectionNumber: 0
        }
    }

    getColNumber() {
        return ++this.state.collectionNumber
    }

    afterInit() {
        _.delay().then(() => {
            http.get(`https://api.unsplash.com/collections/?page=${this.state.collectionNumber}&&${this.state.access}`)
                .then(res => initCollection(res, this.getColNumber()))
                .catch(error => console.log(`Error: ${error}`))
        })
        this.render()
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
        <app-collection>
          <div class="preloader-wrapper small active preloader">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </app-collection>
    `
})

function initCollection(collection, page) {
    removePreloader();
    const el = document.createElement(`div`);
    el.innerHTML = `<collection-${page}></collection-${page}>`;
    document.querySelector('app-collection').append(el);
    // kind of bad solution for custom elements,
    // but registerElement is going to be removed,
    // and I can't use the same constructor of HTMLElement child for every collection tag,
    // so this is the only left way I found
    new AppCollection({
        selector: `collection-${page}`,
        template: `<div>collection${page}</div>`,
        collection
    }).render(); // invoke render() immediately
}

function handleScroll() {
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            http.get(`https://api.unsplash.com/collections/?page=${this.state.collectionNumber}&&${this.state.access}`)
                .then(res => initCollection(res, this.getColNumber()))
                .catch(error => console.log(`Error: ${error}`))
        }
    })
}

function removePreloader() {
    const preloader = $('.preloader');
    if (_.isNull(preloader)) return
    preloader.nativeElement.remove();
}