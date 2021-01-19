class Button1 {
    type: string
    label: string

    constructor(label: string , type: string = "button") {
        this.type = type;
        this.label = label;
    }

    generate() {
        return `<button type="${this.type}">${this.label}</button>`;
    }
}

class InputForm1 {
    type: string;
    placeholder: string;

    constructor(type: string = "text", placeholder: string = "") {
        this.type = type;
        this.placeholder = placeholder;
    }

    generate() {
        return `<input type="${this.type}" placeholder="${this.placeholder}">`;
    }

    reset() {

    }

}

class Siswa {



}