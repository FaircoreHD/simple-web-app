class Component {
    tipe:string;
    nmSelector:string;

    constructor(selector, name) {
        this.tipe = selector;
        this.nmSelector = name;
    }

    // createElemet(tag, text, attribute = []) {
    //     let element = document.createElement(`${tag}`);
    //     element.textContent = text;
    //     if(attribute !== []) {
    //         for(let attr of attribute) {
    //             // element.setAttribute(`${Object.keys(attr)}`, `${Object.values(attr)}`);
    //             element.setAttribute(`${Object.keys(attr)}`, ``);
    //             console.log();
    //         }
    //         Object.keys(attribute).forEach((key) => {
    //             console.log(key);
    //         });
    //     }
    //     document.appendChild(element);
    // }

    show() {
        let element = this.nmSelector;
        
    }

    hide() {

    }
}

class Form extends Component {



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