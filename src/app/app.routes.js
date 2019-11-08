import {homePageComponent} from "./pages/home-page.component";
import {notFound} from "./pages/not-found.component";
import {collectionComponent} from "./pages/collection-page.component";

// router object

export const routes = [
    { path: '', component: homePageComponent },
    { path: '**', component: notFound },
    { path: 'collection', component: collectionComponent }
]