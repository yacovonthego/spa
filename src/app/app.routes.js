import {homePageComponent} from "./pages/home-page.component";
import {notFound} from "./common/not-found.component";

export const routes = [
    { path: '', component: homePageComponent },
    { path: '**', component: notFound }
]