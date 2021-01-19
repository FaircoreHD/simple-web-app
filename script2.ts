let nmSis: string[] = Array();
let mtk: number[] = Array();
let agm: number[] = Array();
let bing: number[] = Array();
let alpro: number[] = Array();
let bd: number[] = Array();
let rerata: number[] = Array();
let terbesar: number = 0;
let index: number;

function inputData() {
    //mengambil inputan
    let inputSiswa: string = (<HTMLInputElement>document.getElementById("nmSiswa")).value;
    let nMtk: number = parseInt((<HTMLInputElement>document.getElementById("math")).value);
    let nAgm: number = parseInt((<HTMLInputElement>document.getElementById("religi")).value);
    let nBing: number = parseInt((<HTMLInputElement>document.getElementById("bahasa")).value);
    let nAlpro: number = parseInt((<HTMLInputElement>document.getElementById("pemograman")).value);
    let nBd: number = parseInt((<HTMLInputElement>document.getElementById("database")).value);
    let e:number = 0;
    let warning:string = "Form nilai tidak boleh kosong";
    let empty:string = "Nama tidak boleh kosong";

    if(inputSiswa == "") {
        alert(empty);
        window.location.reload();
    }
    else if(isNaN(nMtk) == true || isNaN(nAgm) == true || isNaN(nBing) == true || isNaN(nAlpro) == true || isNaN(nBd) == true) {
        alert(warning);
        window.location.reload();
    }

    let besarRerata:number = (nMtk + nAgm + nBing + nAlpro + nBd) / 5;
    rerata.push(besarRerata);

    //menambahkan inputan ke dalam var array
    nmSis.push(inputSiswa);
    mtk.push(nMtk);
    agm.push(nAgm);
    bing.push(nBing);
    alpro.push(nAlpro);
    bd.push(nBd);

    //menampilkan hasil inputan ke dalam tabel
    let tabelHasil: HTMLElement;
    tabelHasil = document.getElementById('table');
    let input: string;
    
    for (let i = 0; i < nmSis.length; i++) {
        index = i + 1;
        input = ('<tr><td>' + index.toString() + '</td><td>' + nmSis[i] + ' </td><td> ' + mtk[i].toString() + '</td><td> ' + agm[i].toString() + '</td><td> ' + bing[i].toString() + '</td><td> ' + alpro[i].toString() + '</td><td> ' + bd[i].toString() + '</td><td> ' + rerata[i].toString() + '</td></tr>');
    }

    tabelHasil.innerHTML += input.toString();

    //mereset form inputan
    (<HTMLInputElement>document.getElementById('nmSiswa')).value = '';
    (<HTMLInputElement>document.getElementById('math')).value = '';
    (<HTMLInputElement>document.getElementById('religi')).value = '';
    (<HTMLInputElement>document.getElementById('bahasa')).value = '';
    (<HTMLInputElement>document.getElementById('pemograman')).value = '';
    (<HTMLInputElement>document.getElementById('database')).value = '';
    
}

function filter() {
    matematika();
    agama();
    bahasaInggris();
    algoritmaPemograman();
    basisData();
    rangkingList();
}

function urutkanAscending(a:number, b:number) {
    if(a > b) {
        return 1;
    } else if(b > a) {
        return -1;
    } else {
        return 0;
    }
}

function rangkingList() {
    let list: HTMLElement;
    list = document.getElementById('rangking');
    let result: string;
    const sortedArray: number[] = rerata.sort();
    
    for(let i=0; i<sortedArray.length; i++) {
        console.log(sortedArray[i] + nmSis[i]);
        index = i + 1;
        result = ('<tr><td>' + index.toString() + '</td><td>' + nmSis[i] + ' </td><td>' + rerata[i] + ' </td></tr>');
        list.innerHTML = result;
    }
}

function matematika() {
    let mtkTerbesar: HTMLElement;
    mtkTerbesar = document.getElementById('mtk');
    let result: string;
    let terbesar: number = 0;
    let count: number;

    for(let i=0; i<nmSis.length; i++) {
        if(mtk[i] > terbesar) {
            terbesar = mtk[i];
            count = i;
        }
    }

    result = (nmSis[count] + ' (' + mtk[count] + ')');
    mtkTerbesar.innerHTML = result;
}

function agama() {
    let agmTerbesar: HTMLElement;
    agmTerbesar = document.getElementById('agama');
    let result: string;
    let terbesar: number = 0;
    let count: number;

    for(let i=0; i<nmSis.length; i++) {
        if(agm[i] > terbesar) {
            terbesar = agm[i];
            count = i;
        }
    }

    result = (nmSis[count] + ' (' + agm[count] + ')');
    agmTerbesar.innerHTML = result;
}

function bahasaInggris() {
    let bingTerbesar: HTMLElement;
    bingTerbesar = document.getElementById('bing');
    let result: string;
    let terbesar: number = 0;
    let count: number;

    for(let i=0; i<nmSis.length; i++) {
        if(bing[i] > terbesar) {
            terbesar = bing[i];
            count = i;
        }
    }

    result = (nmSis[count] + ' (' + bing[count] + ')');
    bingTerbesar.innerHTML = result;
}

function algoritmaPemograman() {
    let alproTerbesar: HTMLElement;
    alproTerbesar = document.getElementById('alpro');
    let result: string;
    let terbesar: number = 0;
    let count: number;

    for(let i=0; i<nmSis.length; i++) {
        if(alpro[i] > terbesar) {
            terbesar = alpro[i];
            count = i;
        }
    }

    result = (nmSis[count] + ' (' + alpro[count] + ')');
    alproTerbesar.innerHTML = result;
}

function basisData() {
    let bdTerbesar: HTMLElement;
    bdTerbesar = document.getElementById('bdata');
    let result: string;
    let terbesar: number = 0;
    let count: number;

    for(let i=0; i<nmSis.length; i++) {
        if(bd[i] > terbesar) {
            terbesar = bd[i];
            count = i;
        }
    }

    result = (nmSis[count] + ' (' + bd[count] + ')');
    bdTerbesar.innerHTML = result;
}
