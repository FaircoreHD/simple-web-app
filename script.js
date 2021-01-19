var Button = /** @class */ (function () {
    function Button(label, type) {
        if (type === void 0) { type = "button"; }
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
    function InputForm(type, placeholder) {
        if (type === void 0) { type = "text"; }
        if (placeholder === void 0) { placeholder = ""; }
        this.type = type;
        this.placeholder = placeholder;
    }
    InputForm.prototype.generate = function () {
        return "<input type=\"" + this.type + "\" placeholder=\"" + this.placeholder + "\">";
    };
    return InputForm;
}());
var Auth = /** @class */ (function () {
    function Auth(form) {
        if (form === void 0) { form = ''; }
        this.form = form;
    }
    Auth.prototype.validate = function (username, password) {
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (username == '' || username !== this.username) {
            return "<div class=\"\">";
        }
    };
    Auth.prototype.loginSuccess = function () {
    };
    Auth.prototype.loginFailed = function (type, msg) {
        if (type == 'forbidden') {
            return "<div class=\"\">";
        }
    };
    return Auth;
}());
