/// <reference path="../../script.ts"/>

let content = document.getElementById("content");
let btnBack = new Hyperlink("Kembali", "../../index.html", "btn btn-info");
let btnLogin = new Button("Login", "submit");
let inputEmail = new InputForm("email", "Masukkan email anda");


content.innerHTML = `
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-3 p-3 m-auto my-auto">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        
                        ${inputEmail.generate()}
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                        <small id="emailHelp" class="form-text text-muted"></small>
                    </div>
                    ${btnLogin.generate("validateLogin", "onClick")}
                    ${btnBack.generate()}
                </form>
            </div>
        </div>    
    </div>
`;

