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
var Pemesanan = /** @class */ (function () {
    function Pemesanan() {
    }
    Pemesanan.prototype.exportInvoice = function (details) {
        if (details === void 0) { details = {}; }
        this.invoice = "\n        <div class=\"container\">\n            <div class=\"row mt-4 mb-4\">\n                <div class=\"col-md-6 p-3 m-auto my-auto\">\n                    <form>\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            <p class=\"mb-2\">Silahkan menyalin kode INVOICE di bawah ini, untuk kemdian ditunjukkan kepada pihak service</p>\n                        </div>\n                        <div class=\"form-group row\">\n                            <label for=\"colFormLabelLg\" class=\"col-sm-2 col-form-label\">INVOICE</label>\n                            <div class=\"col-sm-10\">\n                                <input type=\"email\" class=\"form-control\" id=\"colFormLabelLg\" placeholder=\"col-form-label-lg\">\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-primary\">Lakukan Pemesanan Kembali</button>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button type=\"button\" class=\"btn btn-info\">Kembali ke Halaman Awal</button>\n                            </div>\n                        </div>\n        ";
        // for(let detail of details) {
        // }
        this.invoice += "\n                    </form>\n                </div>\n            </div>\n        </div>\n        ";
        var result = this.invoice;
        return result;
    };
    Pemesanan.prototype.generateNumber = function () {
        var list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
        var result = "";
        for (var i = 0; i < list.length; i++) {
            var char = Math.floor(Math.random() * list.length);
            result = result + list.charAt(char);
        }
        return result;
    };
    return Pemesanan;
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
