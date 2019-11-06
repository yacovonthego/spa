import {VComponent} from "framework";
import {AppBlock} from "./app.collection.block";

export class AppCollection extends VComponent {
    constructor(config) {
        super(config);
        this.state = {
            collection: config.collection
        };

    }

}
