var Button = /** @class */ (function () {
    function Button(label, type, selector) {
        if (type === void 0) { type = "button"; }
        if (selector === void 0) { selector = "primary"; }
        this.type = type;
        this.label = label;
    }
    Button.prototype.generate = function (callback, event) {
        if (callback === void 0) { callback = null; }
        if (event === void 0) { event = null; }
        if (callback !== null && event !== null) {
            return "<button class=\"btn btn-primary\" type=\"" + this.type + "\" " + event + "=\"" + callback + "()\">" + this.label + "</button>";
        }
        else {
            return "<button class=\"btn btn-primary\" type=\"" + this.type + "\">" + this.label + "</button>";
        }
    };
    return Button;
}());
var Hyperlink = /** @class */ (function () {
    function Hyperlink(label, href, selector) {
        if (href === void 0) { href = "#"; }
        if (selector === void 0) { selector = ""; }
        this.label = label;
        this.href = href;
        this.selector = selector;
    }
    Hyperlink.prototype.generate = function () {
        return "<a href=\"" + this.href + "\" class=\"" + this.selector + "\">" + this.label + "</a>";
    };
    return Hyperlink;
}());
var InputForm = /** @class */ (function () {
    function InputForm(type, placeholder, selector) {
        if (type === void 0) { type = "text"; }
        if (placeholder === void 0) { placeholder = ""; }
        if (selector === void 0) { selector = ""; }
        this.type = type;
        this.placeholder = placeholder;
        this.selector = selector;
    }
    InputForm.prototype.generate = function (name) {
        if (name === void 0) { name = null; }
        if (name == null) {
            return "<input class=\"" + this.selector + "\" type=\"" + this.type + "\" placeholder=\"" + this.placeholder + "\">";
        }
        else {
            return "<input class=\"" + this.selector + "\" id=\"" + name + "\" type=\"" + this.type + "\" placeholder=\"" + this.placeholder + "\">";
        }
    };
    return InputForm;
}());
var Auth = /** @class */ (function () {
    function Auth(email, password) {
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        this.validEmail = "user12@gmail.com";
        this.validPassword = "pwuser12";
        this.email = email;
        this.password = password;
    }
    Auth.prototype.validate = function () {
        if (this.email !== this.validEmail || this.password !== this.validPassword) {
            alert("Email atau Password salah!");
            return;
        }
        else {
            return true;
        }
    };
    return Auth;
}());
