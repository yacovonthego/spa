import {VComponent} from "framework";

class NotFound extends VComponent {
    constructor(config) {
        super(config);
    }

    afterInit() {
        // console.log(this)
    }

}

export const notFound = new NotFound({
    selector: 'app-bot-found',
    template: `
        <h1>Страница не найдена</h1>
        <a href="#">Вернуться на главную</a>
    `
});