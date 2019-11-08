import {VComponent, _, http, renderComponent} from "framework";
import {Photos} from "../common/app.photos";

// everything is pretty similar to a home-page component
// and that's a big problem, I'm planning to solve in near future by creating a class unifying them both

class CollectionComponent extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            id: null, // id of collection to search photos for
            page: 1, // iterator for pages
            access: 'client_id=5460563e61c411ffb1d1dc5566d5a6c5449cb6d08f8804ddf5e18df08c661e2d', // client access key for api calls
            loading: false
        }
        this.onScroll = this.onScroll.bind(this); // bind context whether it's going to be window in addEventListener
    }

    getNextPage() {
        return ++this.state.page; // step iterator call
    }

    onInit() {
        this.state.id = getHashId(); // get id from url parameters from hash url
        window.addEventListener('scroll', this.onScroll) // add listener for infinite scroll
    }

    afterInit() {
        _.delay().then(() =>
            http.get(`https://api.unsplash.com/collections/${this.state.id}/photos/?page=${this.state.page}&&${this.state.access}`)
                .then(res => initPhotos(res, this.getNextPage())) // first call for re-render with API data
        );
    };

    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll); // cleanup to prevent listener problems
    }

    onScroll() {
        // this is pretty much just infinite scroll implementation
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.state.loading) {
            this.state.loading = true;
            http.get(`https://api.unsplash.com/collections/${this.state.id}/photos/?page=${this.state.page}&&${this.state.access}`)
                .then(res => {
                    initPhotos(res, this.getNextPage())
                    this.state.loading = false;
                })
        }
    }
}

export const collectionComponent = new CollectionComponent({
    selector: 'coll',
    template: `
        <photo-collection>
          <div class="preloader-wrapper big active preloader">
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
        </photo-collection>
    `
});

function initPhotos(photos, page) { // helper function for initialization
    _.removePreloader();
    const el = document.createElement('div');
    el.innerHTML = `<photos-${page}></photos-${page}>`;
    document.querySelector('photo-collection').append(el);
    renderComponent(
        new Photos({
            selector: `photos-${page}`,
            template: `<div>photos</div>`,
            photos,
            page
        })
    )
}

function getHashId() {
    const hash = window.location.hash;
    const dot = hash.indexOf('.');
    return hash.slice(dot + 1, hash.length);
}