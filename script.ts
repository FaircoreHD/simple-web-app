class Button {
    protected type: string
    protected label: string
    protected selector: string;

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
    protected label: string;
    protected href: string;
    protected selector: string;

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
    protected type: string;
    protected placeholder: string;
    protected selector: string;

    constructor(type: string = "text", placeholder: string = "", selector: string = "") {
        this.type = type;
        this.placeholder = placeholder;
        this.selector = selector;
    }

    generate(name: string = null) {
        if(name == null) {
            return `<input class="${this.selector}" type="${this.type}" placeholder="${this.placeholder}">`;
        } else {
            return `<input class="${this.selector}" id="${name}" type="${this.type}" placeholder="${this.placeholder}">`;
        }
    }
}


class Auth {
    protected validEmail:string = "user12@gmail.com";
    protected validPassword:string = "pwuser12";
    protected email:string;
    protected password:string;

    constructor(email:string = "", password:string = "") {
        this.email = email;
        this.password = password;
    }

    validate() {
        if(this.email !== this.validEmail || this.password !== this.validPassword) {
            alert("Email atau Password salah!");
            return;
        } else {
            return true;
        }
    }
}