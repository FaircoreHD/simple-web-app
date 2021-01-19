class Button {
    type: string
    label: string
    selector: string;

    constructor(label: string , type: string = "button", selector: string = "primary") {
        this.type = type;
        this.label = label;
        
    }

    generate(callback: string = null, event: string = null) {
        if(callback !== null && event !== null) {
            return `<button class="btn btn-primary" type="${this.type}" ${event}="${callback}()">${this.label}</button>`;
        } else {
            return `<button class="btn btn-primary" type="${this.type}">${this.label}</button>`;
        }
    }
}

class Hyperlink {
    label: string;
    href: string;
    selector: string;

    constructor(label: string , href: string = "#", selector: string = "") {
        this.label = label;
        this.href = href;
        this.selector = selector;
    }

    generate() {
        return `<a href="${this.href}" class="${this.selector}">${this.label}</a>`;
    }
}

class InputForm {
    type: string;
    placeholder: string;
    selector: string;

    constructor(type: string = "text", placeholder: string = "", selector: string = "") {
        this.type = type;
        this.placeholder = placeholder;
        this.selector = selector;
    }

    generate() {
        return `<input class="${this.selector}" type="${this.type}" placeholder="${this.placeholder}">`;
    }
}


class Auth {
    username:string;
    password:string;
    form:string;

    constructor(form:string = '') {
        this.form = form;
    }

    validate(username = '', password = '') {
        if(username == '' || username !== this.username) {
            return `<div class="">`;
        }
    }

    loginSuccess() {
        
    }

    loginFailed(type, msg) {
        if(type == 'forbidden') {
            return `<div class="">`;
        }
    }
}